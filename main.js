

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-product');
    const clearButton = document.querySelector('.clear-list');
    const typeSelect = document.getElementById('type-select');
    const productNameInput = document.getElementById('product-name');
    const productCountInput = document.getElementById('product-count');
    const productsList = document.querySelector('.products-list');
  

    addButton.addEventListener('click', () => {

      const type = typeSelect.value;
      const name = productNameInput.value;
      const count = productCountInput.value;
  

      if (!type || !name || count <= 0) {
        alert('Пожалуйста, заполните все поля корректно.');
        return;
      }
  

      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.textContent = `${name} (${type}) - Количество: ${count}`;
  

      productsList.appendChild(productItem);
  

      typeSelect.value = '';
      productNameInput.value = '';
      productCountInput.value = '';
    });
  

    clearButton.addEventListener('click', () => {

      productsList.innerHTML = '';
    });
  });
  