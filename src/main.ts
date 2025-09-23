interface Product {
  name: string;
  price: string | null;
  url: string;
  imageUrl: string;
}

const PRODUCT_DATA_URL = './data/products.json';

const productList = document.querySelector<HTMLElement>('#product-list');

if (!productList) {
  throw new Error('Expected #product-list container to exist in the DOM.');
}

const showErrorMessage = (message: string) => {
  productList.innerHTML = '';
  const errorRow = document.createElement('div');
  errorRow.className = 'p-6 text-center text-xl font-bold text-white bg-black bg-opacity-40';
  errorRow.textContent = message;
  productList.append(errorRow);
};

const scaleTitle = () => {
  window.requestAnimationFrame(() => {
    const title = document.getElementById('main-title-text');
    const container = title?.parentElement;

    if (!title || !container) {
      return;
    }

    title.style.transform = 'scaleX(1)';

    const containerWidth = Math.max(container.clientWidth - 5, 0);
    const titleWidth = title.scrollWidth;

    if (titleWidth > containerWidth && containerWidth > 0) {
      const scaleFactor = containerWidth / titleWidth;
      title.style.transform = `scaleX(${scaleFactor})`;
    }
  });
};

const resetAllProducts = () => {
  productList.querySelectorAll<HTMLElement>('.expanded-content').forEach((content) => {
    content.classList.add('hidden');
  });
  productList.querySelectorAll<HTMLElement>('.product-row').forEach((rowElement) => {
    rowElement.classList.remove('bg-[#FF00FF]');
  });
  productList.querySelectorAll<HTMLElement>('.toggle-icon').forEach((iconElement) => {
    iconElement.textContent = '+';
  });
};

const createProduct = (product: Product) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'product-item border-b-4 border-white';

  const row = document.createElement('div');
  row.className = 'product-row px-4 py-2 flex justify-between items-center hover:bg-[#FF00FF]';

  const leftSide = document.createElement('div');
  leftSide.className = 'flex items-center min-w-0';

  const previewImg = document.createElement('img');
  previewImg.src = product.imageUrl;
  previewImg.alt = '';
  previewImg.className = 'flex-shrink-0 w-12 h-12 md:w-16 md:h-16 object-cover border-2 border-white mr-4';
  previewImg.addEventListener('error', () => {
    previewImg.style.display = 'none';
  });

  const title = document.createElement('h2');
  title.className = 'text-xl md:text-3xl font-bold truncate text-gray-100';
  title.textContent = product.name;

  leftSide.append(previewImg, title);

  const icon = document.createElement('span');
  icon.className = 'text-3xl md:text-5xl font-bold toggle-icon ml-4 text-gray-100';
  icon.textContent = '+';

  row.append(leftSide, icon);

  const content = document.createElement('div');
  content.className = 'expanded-content hidden p-4 md:p-8 bg-gray-700 bg-opacity-30';

  const layout = document.createElement('div');
  layout.className = 'flex flex-col md:flex-row gap-8';

  const imageColumn = document.createElement('div');
  imageColumn.className = 'flex-shrink-0 w-full md:w-1/3';

  const heroImg = document.createElement('img');
  heroImg.src = product.imageUrl;
  heroImg.alt = product.name;
  heroImg.className = 'w-full h-auto object-cover border-4 border-white';
  heroImg.addEventListener('error', () => {
    heroImg.onerror = null;
    heroImg.src = 'https://placehold.co/400x400/1a1a1a/f0f_0?text=IMAGE_ERROR';
  });

  imageColumn.append(heroImg);

  const detailsColumn = document.createElement('div');
  detailsColumn.className = 'flex-grow flex flex-col justify-between';

  const textWrapper = document.createElement('div');

  const heading = document.createElement('h3');
  heading.className = 'text-2xl md:text-4xl font-bold mb-4 text-gray-100';
  heading.textContent = product.name;

  const price = document.createElement('p');
  price.className = 'text-4xl md:text-6xl font-bold text-[#FFFF00] mb-6';
  price.textContent = product.price ?? 'INQUIRE';

  textWrapper.append(heading, price);

  const purchaseButton = document.createElement('button');
  purchaseButton.type = 'button';
  purchaseButton.className = 'buy-button w-full mt-4 bg-[#00FF00] text-black text-2xl md:text-4xl font-bold p-4 border-4 border-black hover:bg-[#FFFF00]';
  purchaseButton.textContent = 'BUY NOW';
  purchaseButton.addEventListener('click', (event) => {
    event.stopPropagation();
    window.open(product.url, '_blank', 'noopener');
  });

  detailsColumn.append(textWrapper, purchaseButton);

  layout.append(imageColumn, detailsColumn);
  content.append(layout);
  wrapper.append(row, content);

  row.addEventListener('click', () => {
    const shouldOpen = content.classList.contains('hidden');
    resetAllProducts();
    if (shouldOpen) {
      content.classList.remove('hidden');
      icon.textContent = '-';
      row.classList.add('bg-[#FF00FF]');
    }
  });

  return wrapper;
};

const renderProducts = (products: Product[]) => {
  productList.replaceChildren();
  const fragment = document.createDocumentFragment();
  products.forEach((product) => {
    fragment.append(createProduct(product));
  });
  productList.append(fragment);
  resetAllProducts();
  scaleTitle();
};

const isProductRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const parseProducts = (rawData: unknown): Product[] => {
  if (!Array.isArray(rawData)) {
    throw new Error('Product data must be an array.');
  }

  return rawData.map((item, index) => {
    if (!isProductRecord(item)) {
      throw new Error(`Product at index ${index} is not an object.`);
    }

    const name = typeof item.name === 'string' ? item.name : null;
    const url = typeof item.url === 'string' ? item.url : null;
    const imageUrl = typeof item.imageUrl === 'string' ? item.imageUrl : null;
    const price = typeof item.price === 'string' ? item.price : null;

    if (!name || !url || !imageUrl) {
      throw new Error(`Product at index ${index} is missing a name, url, or imageUrl.`);
    }

    return { name, url, imageUrl, price };
  });
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(PRODUCT_DATA_URL, { cache: 'no-cache' });

  if (!response.ok) {
    throw new Error(`Failed to load product data (status ${response.status})`);
  }

  const data = await response.json();
  return parseProducts(data);
};

const initialisePage = async () => {
  try {
    const products = await fetchProducts();

    if (products.length === 0) {
      showErrorMessage('Come back soon — products are on their way.');
      return;
    }

    renderProducts(products);
  } catch (error) {
    console.error('Failed to load products', error);
    showErrorMessage('Sorry, we could not load the product list. Please try again later.');
  }
};

if (document.fonts?.ready) {
  document.fonts
    .ready.then(() => {
      scaleTitle();
      window.setTimeout(scaleTitle, 100);
    })
    .catch(() => {
      scaleTitle();
    });
} else {
  scaleTitle();
}

window.addEventListener('resize', scaleTitle);

void initialisePage();
