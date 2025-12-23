<script setup>
defineProps({
  position: {
    type: String,
    default: 'bottom-right' // bottom-right, bottom-left, top-right, top-left
  }
})
</script>

<template>
  <div 
    class="pro-tip"
    :class="position"
  >
    <div class="pro-tip-label">Pro tip</div>
    <div class="pro-tip-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.pro-tip {
  position: absolute;
  max-width: 200px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transform: rotate(-2deg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.pro-tip.bottom-right {
  bottom: 60px;
  right: 40px;
}

.pro-tip.bottom-left {
  bottom: 60px;
  left: 40px;
  transform: rotate(2deg);
}

.pro-tip.top-right {
  top: 20px;
  right: 20px;
  transform: rotate(2deg);
}

.pro-tip.top-left {
  top: 80px;
  left: 40px;
  transform: rotate(-2deg);
}

.pro-tip-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.2);
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.pro-tip-content {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}

.pro-tip-content :deep(code) {
  background: rgba(34, 197, 94, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
  color: #4ade80;
}
</style>
