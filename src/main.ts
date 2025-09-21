interface Product {
  name: string;
  price: string | null;
  url: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    name: "ARCTIC Liquid Freezer III 240 A-RGB - Water Cooling PC, All-in-One CPU AIO Water Cooler, Intel & AMD compatible, efficient PWM-controlled pump, fan: 200-1800 rpm, LGA1851/1700 Contact Frame - Black",
    price: "£77.00",
    url: "https://www.amazon.co.uk/dp/B09VH4M76W?linkCode=spc&tag=crackunit-21&creativeASIN=B09VH4M76W&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/41oeZboFysL._AC_.jpg",
  },
  {
    name: "Noctua NF-A12x25 PWM chromax.black.swap, Premium Quiet Fan, 4-Pin (120mm, Black)",
    price: "£30.95",
    url: "https://www.amazon.co.uk/dp/B09C6DQDNT?linkCode=spc&tag=crackunit-21&creativeASIN=B09C6DQDNT&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/411APmwuymL._AC_.jpg",
  },
  {
    name: "Hikari Medium Sweet White Miso Paste 400 g",
    price: "£4.56",
    url: "https://www.amazon.co.uk/dp/B078NKBLHH?linkCode=spc&tag=crackunit-21&creativeASIN=B078NKBLHH&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/417U7U618SL._AC_.jpg",
  },
  {
    name: "Emma Basic - Seaweed Furikake seasoning 100g | Rice Topping | Avocado Topping | High Fibre | Source of Protein | No additives",
    price: "£7.89",
    url: "https://www.amazon.co.uk/dp/B098D5RKP9?linkCode=spc&tag=crackunit-21&creativeASIN=B098D5RKP9&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/31Z9wXldazL._AC_.jpg",
  },
  {
    name: "Yum Asia Tsuki Mini Rice Cooker with Shinsei Ceramic Bowl (2.5 cups, 0.45 litre) 5 Rice Cooking Functions, 2 Multicooker Functions, Hidden LED Display, 220-240V UK (Pebble Grey)",
    price: "£89.90",
    url: "https://www.amazon.co.uk/dp/B0B42W8TLT?linkCode=spc&tag=crackunit-21&creativeASIN=B0B42W8TLT&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/31R4DjhzxBL._AC_.jpg",
  },
  {
    name: "OXO Good Grips Kitchen & Herb Scissors, Silver/Black",
    price: "£13.99",
    url: "https://www.amazon.co.uk/dp/B000KILLXM?linkCode=spc&tag=crackunit-21&creativeASIN=B000KILLXM&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/315FSlKMboL._AC_.jpg",
  },
  {
    name: "Isopropanol Alcohol IPA 99.9% 1L",
    price: "£6.59",
    url: "https://www.amazon.co.uk/dp/B08FJ74J22?linkCode=spc&tag=crackunit-21&creativeASIN=B08FJ74J22&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/21ssgpZfl7S._AC_.jpg",
  },
  {
    name: "DEHA Design Boston Aluminium Picture Frame, Matt Black A3, 29.7x42cm",
    price: "£21.21",
    url: "https://www.amazon.co.uk/dp/B07DC7WYS2?linkCode=spc&tag=crackunit-21&creativeASIN=B07DC7WYS2&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/417UwQ6xL4L._AC_.jpg",
  },
  {
    name: "Run the Song: Writing About Running About Listening (Ben Ratliff)",
    price: null,
    url: "https://www.amazon.co.uk/dp/1644453282?linkCode=spc&tag=crackunit-21&creativeASIN=1644453282&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/51xiJ31yAxL._AC_.jpg",
  },
  {
    name: "Konesky Cherry Toilet Brush and Holder Set, Cherry Shaped",
    price: "£13.59",
    url: "https://www.amazon.co.uk/dp/B07JGPHBP9?linkCode=spc&tag=crackunit-21&creativeASIN=B07JGPHBP9&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/31dEJ6StxVL._AC_.jpg",
  },
  {
    name: "OBSBOT Meet SE 1080P 100FPS Webcam, AI Framing Streaming Camera, Gesture Control, HDR (Space Grey)",
    price: "£67.00",
    url: "https://www.amazon.co.uk/dp/B0DQ196WLW?linkCode=spc&tag=crackunit-21&creativeASIN=B0DQ196WLW&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/31SlDkRLTVL._AC_.jpg",
  },
  {
    name: "Psyllium Husk Fibre Supplement 4000mg with Acidophilus, 120 Vegan Capsules",
    price: "£13.29",
    url: "https://www.amazon.co.uk/dp/B08WM1VP8V?linkCode=spc&tag=crackunit-21&creativeASIN=B08WM1VP8V&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/41D7sx2NToL._AC_.jpg",
  },
  {
    name: "Braun Digital Alarm Clock with Snooze, Negative LCD Display, Rotating Bezel, Crescendo Beep, Black (BC24B)",
    price: "£26.49",
    url: "https://www.amazon.co.uk/dp/B0CJFVW93V?linkCode=spc&tag=crackunit-21&creativeASIN=B0CJFVW93V&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/410hBm8fqdL._AC_.jpg",
  },
  {
    name: "Moondrop Space Travel TWS Earphones, Bluetooth 5.3 Noise Canceling True Wireless IEMs",
    price: "£20.99",
    url: "https://www.amazon.co.uk/dp/B0CCVCPCNR?linkCode=spc&tag=crackunit-21&creativeASIN=B0CCVCPCNR&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/31i7WFKHfUL._AC_.jpg",
  },
  {
    name: "Your Life Is Manufactured: How We Make Things, Why It Matters, and How We Can Do It Better (Tim Minshall)",
    price: "£15.80",
    url: "https://www.amazon.co.uk/dp/0571381014?linkCode=spc&tag=crackunit-21&creativeASIN=0571381014&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/51UbdWigXyL._AC_.jpg",
  },
  {
    name: "UGREEN Nexode Magnetic Wireless Power Bank 10000mAh, 20W USB-C, MagSafe Compatible",
    price: "£18.99",
    url: "https://www.amazon.co.uk/dp/B0CH33F5P2?linkCode=spc&tag=crackunit-21&creativeASIN=B0CH33F5P2&asc_item-id=amzn1.ideas.FLAP8Q4I7G78&ref_=aip_sf_list_spv_ons_mixed_d_asin",
    imageUrl: "https://m.media-amazon.com/images/I/31A1TsyE7CL._AC_.jpg",
  },
];

const productList = document.querySelector<HTMLElement>('#product-list');

if (!productList) {
  throw new Error('Expected #product-list container to exist in the DOM.');
}

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
  title.className = 'text-xl md:text-3xl font-bold truncate';
  title.textContent = product.name;

  leftSide.append(previewImg, title);

  const icon = document.createElement('span');
  icon.className = 'text-3xl md:text-5xl font-bold toggle-icon ml-4';
  icon.textContent = '+';

  row.append(leftSide, icon);

  const content = document.createElement('div');
  content.className = 'expanded-content hidden p-4 md:p-8 bg-black bg-opacity-20';

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
  heading.className = 'text-2xl md:text-4xl font-bold mb-4';
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

products.forEach((product) => {
  productList.append(createProduct(product));
});

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
