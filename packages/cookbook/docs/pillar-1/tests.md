# Tests as Executable Specs

Tests serve double duty for AI agents: documentation and verification.

## Why Tests Matter for Agents

| Purpose | How Tests Help |
|---------|----------------|
| Executable documentation | Shows exactly how code should behave |
| Verification mechanism | Agent can run tests to verify changes |
| Clear prompts | "Make this test pass" is unambiguous |
| Contract definition | Test defines what, agent implements how |

## The Clearest Prompt

Instead of describing what you want in prose:

> "Add a function that filters users by role and returns them sorted by name"

Write a failing test:

```typescript
it('filters users by role', () => {
  const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Carol', role: 'admin' }
  ]
  
  const result = filterByRole(users, 'admin')
  
  expect(result).toEqual([
    { name: 'Alice', role: 'admin' },
    { name: 'Carol', role: 'admin' }
  ])
})
```

Then tell the agent: **"Make this test pass"**

The test defines the contract. The agent implements it. No ambiguity.

## Test Structure for Agents

Use descriptive test names that explain the behavior:

```typescript
describe('UserService', () => {
  describe('filterByRole', () => {
    it('returns only users matching the specified role', () => {})
    it('returns empty array when no users match', () => {})
    it('preserves original order of matching users', () => {})
    it('throws when role is undefined', () => {})
  })
})
```

The agent can read these names and understand expected behavior.

## Given/When/Then Pattern

Structure tests so the agent can understand the flow:

```typescript
it('sends notification when order is placed', async () => {
  // Given
  const user = createUser({ email: 'test@example.com' })
  const order = createOrder({ userId: user.id })
  
  // When
  await orderService.place(order)
  
  // Then
  expect(notificationService.send).toHaveBeenCalledWith({
    to: user.email,
    template: 'order-confirmation',
    data: { orderId: order.id }
  })
})
```

## Edge Cases as Tests

Document edge cases in tests, not comments:

```typescript
describe('edge cases', () => {
  it('handles empty input gracefully', () => {
    expect(filterByRole([], 'admin')).toEqual([])
  })
  
  it('handles null role by returning all users', () => {
    const users = [{ name: 'Alice', role: 'admin' }]
    expect(filterByRole(users, null)).toEqual(users)
  })
  
  it('is case-insensitive for role matching', () => {
    const users = [{ name: 'Alice', role: 'Admin' }]
    expect(filterByRole(users, 'admin')).toEqual(users)
  })
})
```

## Integration Tests as Examples

Integration tests show how components work together:

```typescript
describe('Order Flow', () => {
  it('creates order, charges payment, sends confirmation', async () => {
    // Setup
    const user = await createTestUser()
    const product = await createTestProduct({ price: 100 })
    
    // Execute
    const order = await orderService.create({
      userId: user.id,
      items: [{ productId: product.id, quantity: 2 }]
    })
    
    // Verify
    expect(order.total).toBe(200)
    expect(paymentService.charge).toHaveBeenCalledWith(user.id, 200)
    expect(emailService.send).toHaveBeenCalledWith(
      expect.objectContaining({ template: 'order-confirmation' })
    )
  })
})
```

## Minimum Viable Test Suite

Even a small test suite helps dramatically:

1. **Happy path tests** - Main functionality works
2. **Error cases** - How errors are handled
3. **Edge cases** - Boundary conditions

You don't need 100% coverage. You need enough tests that the agent can verify its changes work.

:::tip
When adding new features, write the test first. Give the failing test to the agent. This is the fastest path to correct implementation.
:::
