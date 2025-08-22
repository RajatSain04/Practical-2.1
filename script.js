function updateCount(textarea, spanId) {
    const count = textarea.value.length;
    document.getElementById(spanId).textContent = count;
  }