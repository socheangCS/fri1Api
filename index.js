const express = require("express");
const cors = require("cors");
const app = express();
var products = [
  {
    id: 1,
    title: "Samsung Odyssey G7",
    description:
      "32-inch QLED Gaming Monitor with 240Hz refresh rate and 1440p resolution for an immersive gaming experience.",
    price: 899.99,
    rating: 4.9,
    images:
      "https://images.samsung.com/is/image/samsung/p6pim/nz/lc27g75tqsexxy/gallery/nz-odyssey-g7-lc27g75tqsexxy-534752376?$650_519_PNG$",
  },
  {
    id: 2,
    title: "LG UltraGear 27GL83A-B",
    description:
      "27-inch IPS Gaming Monitor with 144Hz refresh rate, 1440p resolution, and NVIDIA G-Sync compatibility.",
    price: 499.99,
    rating: 4.7,
    images:
      "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/d49f22c3-4de9-4af5-8208-aa732f845bd7/md07000489-zoom-01-jpg",
  },
  {
    id: 3,
    title: "ViewSonic VX3276-MHD",
    description:
      "32-inch IPS Monitor with Full HD resolution, ultra-slim bezels, and a sleek design for multimedia enjoyment.",
    price: 279.99,
    rating: 4.5,
    images:
      "https://www.viewsonic.com/media/catalog/product/cache/06191322128cc553887330cc5a9fd96a/v/x/vx3276-2k-mhd_front_hires.png",
  },
  {
    id: 4,
    title: "Dell Alienware AW3420DW",
    description:
      "34-inch Curved Gaming Monitor with 120Hz refresh rate, WQHD resolution, and AlienFX customizable lighting.",
    price: 1199.99,
    rating: 4.8,
    images:
      "https://m.media-amazon.com/images/I/71F1on4Yz8L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "HP Pavilion 22cwa",
    description:
      "21.5-inch IPS LED Monitor with Full HD resolution, wide viewing angles, and a modern, slim design.",
    price: 119.99,
    rating: 4.6,
    images: "https://images.pcliquidations.com/images/isaac/129/129315t550.jpg",
  },
  {
    id: 6,
    title: "AOC CQ32G1",
    description:
      "31.5-inch Curved Gaming Monitor with 144Hz refresh rate, 1440p resolution, and AMD FreeSync technology.",
    price: 349.99,
    rating: 4.4,
    images:
      "https://storage.aoc.com/assets/10418/AOC_C32G1_PV_-FRONT-large.png",
  },
  {
    id: 7,
    title: "BenQ EX2780Q",
    description:
      "27-inch IPS Entertainment Monitor with 144Hz refresh rate, 1440p resolution, and HDRi technology for enhanced visuals.",
    price: 599.99,
    rating: 4.7,
    images:
      "https://image.benq.com/is/image/benqco/ex2780q-right45-3?$ResponsivePreset$",
  },
  {
    id: 8,
    title: "MSI Optix MAG321CQR",
    description:
      "32-inch Curved Gaming Monitor with 144Hz refresh rate, 1440p resolution, and Mystic Light RGB lighting for a stylish setup.",
    price: 449.99,
    rating: 4.6,
    images:
      "https://asset.msi.com/resize/image/global/product/product_7_20181015114810_5bc40dfaef8ca.png62405b38c58fe0f07fcef2367d8a9ba1/380.png",
  },
  {
    id: 9,
    title: "Philips 276E9QDSB",
    description:
      "27-inch Frameless Monitor with Full HD resolution, IPS technology, and LowBlue Mode for eye protection.",
    price: 199.99,
    rating: 4.5,
    images:
      "https://images.philips.com/is/image/PhilipsConsumer/276E9QDSB_27-IMS-en_US?$jpglarge$&wid=1250",
  },
  {
    id: 10,
    title: "Alienware 34 QD-OLED",
    description:
      "34-inch QD-OLED Gaming Monitor with 175Hz refresh rate, 3440x1440 resolution, and AlienFX lighting effects.",
    price: 1499.99,
    rating: 4.9,
    images:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/monitor-alienware-aw3423dw-pdp-hero.psd?qlt=95&fit=constrain,1&hei=3470&wid=5000&fmt=jpg",
  },
  {
    id: 11,
    title: "ASUS VG279Q",
    description:
      "27-inch IPS Gaming Monitor with 144Hz refresh rate, Full HD resolution, and Extreme Low Motion Blur technology.",
    price: 329.99,
    rating: 4.7,
    images:
      "https://www.asus.com/media/global/products/Go8cFldi9g1nNbP0/P_setting_xxx_0_90_end_500.png",
  },
  {
    id: 12,
    title: "Acer R240HY",
    description:
      "23.8-inch IPS Monitor with Full HD resolution, ultra-thin design, and Acer Flicker-less technology for comfortable viewing.",
    price: 149.99,
    rating: 4.5,
    images:
      "https://computerways.co.ke/wp-content/uploads/2020/09/91VDKgf2BNPL._AC_SL1500_.jpg",
  },
  {
    id: 13,
    title: "LG 27UK650-W",
    description:
      "27-inch 4K UHD Monitor with HDR10 support, sRGB 99%, and AMD FreeSync for smooth gaming visuals.",
    price: 499.99,
    rating: 4.8,
    images:
      "https://www.lg.com/pl/images/monitory/md05962236/gallery/medium01.jpg",
  },
  {
    id: 14,
    title: "Dell S2419HGF",
    description:
      "24-inch Gaming Monitor with 144Hz refresh rate, Full HD resolution, and AMD FreeSync for tear-free gaming.",
    price: 199.99,
    rating: 4.6,
    images:
      "https://m.media-amazon.com/images/I/81trYVTVu4L._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 15,
    title: "Samsung UR59C",
    description:
      "32-inch Curved 4K UHD Monitor with a slim design, 1500R curvature, and AMD FreeSync compatibility.",
    price: 449.99,
    rating: 4.7,
    images:
      "https://image-us.samsung.com/SamsungUS/home/computing/02082023/LU32R590CWNXZA_001_Front_Black_SCOM_1.jpg?$product-details-jpg$",
  },
  {
    id: 16,
    title: "ViewSonic XG2402",
    description:
      "24-inch Gaming Monitor with 144Hz refresh rate, Full HD resolution, and FreeSync technology for responsive gaming.",
    price: 229.99,
    rating: 4.5,
    images:
      "https://www.viewsonic.com/media/catalog/product/cache/06191322128cc553887330cc5a9fd96a/x/g/xg2402_front_hires_3.png",
  },
  {
    id: 17,
    title: "HP EliteDisplay E273q",
    description:
      "27-inch QHD Monitor with ergonomic stand, HP Eye Ease technology, and integrated speakers for enhanced productivity.",
    price: 379.99,
    rating: 4.6,
    images: "https://img.grooves.land/images/dgh/395488_00.jpg",
  },
  {
    id: 18,
    title: "ASUS ProArt PA278QV",
    description:
      "27-inch Professional Monitor with 75Hz refresh rate, 1440p resolution, and ASUS ProArt Calibration for color accuracy.",
    price: 399.99,
    rating: 4.8,
    images:
      "https://www.goldonecomputer.com/image/cache/catalog/Products/Monitor%20Asus%20/ASUS%20ProArt%20Display%20PA278QV%20Professional%20Monitor-500x500.jpg",
  },
  {
    id: 19,
    title: "AOC CQ32G2E",
    description:
      "31.5-inch Curved Gaming Monitor with 165Hz refresh rate, QHD resolution, and AMD FreeSync Premium for smooth gameplay.",
    price: 299.99,
    rating: 4.4,
    images:
      "https://i2.komnit.com/store/upload/images/express_2008_1/71826-VWKENH/1597733463-VWKENH.png",
  },
  {
    id: 20,
    title: "BenQ EW3270U",
    description:
      "32-inch 4K HDR Monitor with Brightness Intelligence Plus, USB-C connectivity, and eye-care technology for comfortable viewing.",
    price: 549.99,
    rating: 4.7,
    images:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51bwiYTxx2L.jpg",
  },
  // ... (previous monitor entries)
  {
    id: 21,
    title: "Tesla Model 3",
    description:
      "Electric sedan with impressive acceleration, long-range capabilities, and cutting-edge autopilot features.",
    price: 49999.99,
    rating: 4.9,
    images:
      "https://cdn.motor1.com/images/mgl/NGjE99/s3/2024-tesla-model-3-highland.jpg",
  },
  {
    id: 22,
    title: "Toyota Camry XSE",
    description:
      "Midsize sedan with a stylish design, fuel-efficient engine, and advanced safety features.",
    price: 28999.99,
    rating: 4.7,
    images:
      "https://www.darcarstoyota.com/assets/stock/ColorMatched_01/Transparent/1280/cc_2024TOC02_01_1280/cc_2024TOC020028_01_1280_2PS.png",
  },
  {
    id: 23,
    title: "Ford Mustang GT",
    description:
      "Muscle car with a powerful V8 engine, iconic design, and thrilling performance on the open road.",
    price: 39999.99,
    rating: 4.8,
    images:
      "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/1/vehicle.png",
  },
  {
    id: 24,
    title: "Honda CR-V EX-L",
    description:
      "Compact SUV with a spacious interior, advanced safety features, and fuel-efficient performance.",
    price: 31999.99,
    rating: 4.6,
    images:
      "https://edgecast-img.yahoo.net/mysterio/api/AB4F96CADC55040BF297830D5D632CA391DA18B787DF3DEDB8D45DFED8FADD1B/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD30HOS021B021001.jpg",
  },
  {
    id: 25,
    title: "Chevrolet Silverado 1500",
    description:
      "Full-size pickup truck with powerful towing capabilities, rugged design, and modern technology features.",
    price: 44999.99,
    rating: 4.7,
    images:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2024/trucks/1500/jellies/2024-silverado1500-ck10543-3lt-glt-trimselector.jpg?imwidth=960",
  },
  {
    id: 26,
    title: "BMW X5 xDrive40i",
    description:
      "Luxury SUV with a refined interior, strong performance, and advanced infotainment system.",
    price: 59999.99,
    rating: 4.8,
    images:
      "https://di-uploads-pod10.dealerinspire.com/billjacobsbmw/uploads/2020/03/BMW-MY20-X5-DP-40i-50i-Next-Steps.png",
  },
  {
    id: 27,
    title: "Mercedes-Benz C-Class",
    description:
      "Elegant compact luxury sedan with a comfortable ride, high-quality materials, and advanced safety features.",
    price: 43999.99,
    rating: 4.9,
    images:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/116201/c-class-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
  },
  {
    id: 28,
    title: "Audi Q7",
    description:
      "Premium midsize SUV with a luxurious interior, powerful engine options, and advanced driver assistance features.",
    price: 54999.99,
    rating: 4.7,
    images:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-Q7-271220221608.jpg",
  },
  {
    id: 29,
    title: "Jeep Wrangler Rubicon",
    description:
      "Off-road SUV with iconic design, rugged capabilities, and removable top for an open-air driving experience.",
    price: 37999.99,
    rating: 4.6,
    images: "https://imgd.aeplcdn.com/664x374/n/enfqg3a_1573837.jpg?q=80",
  },
  {
    id: 30,
    title: "Volkswagen Golf GTI",
    description:
      "Hot hatchback with sporty performance, practical design, and a responsive turbocharged engine.",
    price: 29999.99,
    rating: 4.5,
    images:
      "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3170/",
  },
  {
    id: 31,
    title: "Subaru Outback Limited",
    description:
      "Wagon/SUV hybrid with all-wheel drive, spacious interior, and advanced safety technology.",
    price: 33999.99,
    rating: 4.8,
    images:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8c9e9dbb-8d72-4215-950b-0ab6ebdd4d16/a1f7018d-9e17-4d01-91a4-8ba8f8313c18.png",
  },
  {
    id: 32,
    title: "Nissan Rogue SV",
    description:
      "Compact SUV with modern styling, versatile cargo space, and advanced safety features.",
    price: 28999.99,
    rating: 4.6,
    images:
      "https://cdn-ds.com/chrome/2023-Nissan-Rogue-SV-Medford-MA/seo/MzI0ODgwXk1lZGlhIEdhbGxlcnk/NIxYd_3Lpe6dzmwWaDbnY6CbBLXjFvftl2GMwRF5Lf8Yc0kpukHRtjwyTNa5OVjcC4uGoZEuKsGj1MgstOM5Kz98ytV6gWoZ4Jk25eFn4Stj7TXmVSYyb6UUfuQ1qZGw19lSd6g_phdEb6hv7KAH1sANqUEDLWqsqCh_qTIcHaI/cc_2023NIS110162_01_1280_QAB.jpg",
  },
  {
    id: 33,
    title: "Hyundai Sonata Limited",
    description:
      "Midsize sedan with a sleek design, user-friendly technology, and advanced safety features.",
    price: 31999.99,
    rating: 4.7,
    images:
      "https://vehicle-images.dealerinspire.com/stock-images/chrome/431d82e6933ecc26eb256e70f84b276b.png",
  },
  {
    id: 34,
    title: "Kia Telluride SX",
    description:
      "Three-row SUV with a spacious and well-designed interior, advanced safety features, and modern technology.",
    price: 44999.99,
    rating: 4.8,
    images:
      "https://edgecast-img.yahoo.net/mysterio/api/EF99D03911A5D749C52F2E7A2519DEAC58CFD2369013BD57BA0F8BE26B278089/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD10KIS061D021001.jpg",
  },
  {
    id: 35,
    title: "Ram 1500 Laramie",
    description:
      "Full-size pickup truck with a luxurious interior, smooth ride, and powerful engine options.",
    price: 45999.99,
    rating: 4.9,
    images:
      "https://imotor-cms-uploads.s3.ap-southeast-2.amazonaws.com/fJk6cgJJcgBQ177ZgAAB1hgH",
  },
  {
    id: 36,
    title: "Porsche 911 Carrera",
    description:
      "Iconic sports car with timeless design, thrilling performance, and a high-quality interior.",
    price: 89999.99,
    rating: 4.9,
    images:
      "https://www.motortrend.com/uploads/2022/10/911-T-Python-Green-2.jpg?fit=around%7C875:492",
  },
  {
    id: 37,
    title: "Lexus RX 350",
    description:
      "Luxury midsize SUV with a comfortable and quiet interior, advanced safety features, and smooth ride.",
    price: 47999.99,
    rating: 4.7,
    images:
      "https://edgecast-img.yahoo.net/mysterio/api/76DF9C02F2BFECCFF9E5ADA1DAE272782927F9181DDCA927C70B2E07A3144E7C/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD00LES121A021001.jpg",
  },
  {
    id: 38,
    title: "Mazda CX-5 Grand Touring",
    description:
      "Compact SUV with a stylish design, premium interior, and engaging driving dynamics.",
    price: 30999.99,
    rating: 4.6,
    images:
      "https://www.cars.com/i/large/in/v2/stock_photos/1811814b-d1a8-4c9a-8e7b-17b153907b41/eca5c8f7-6768-4094-927d-f42fe92f4653.png",
  },
  {
    id: 39,
    title: "Ford F-150 Platinum",
    description:
      "Top-of-the-line full-size pickup truck with a luxurious interior, powerful engine options, and advanced technology.",
    price: 52999.99,
    rating: 4.8,
    images:
      "https://canyonstatetrucks.com/wp-content/uploads/2023/07/20230705154500_359724187.jpg",
  },
  {
    id: 40,
    title: "Chevrolet Corvette Stingray",
    description:
      "Legendary sports car with a powerful V8 engine, striking design, and impressive performance capabilities.",
    price: 69999.99,
    rating: 4.9,
    images:
      "https://www.motortrend.com/uploads/sites/5/2019/07/2020-Chevrolet-Corvette-front-three-quarter-2.jpg",
  },
  // ... (previous car entries)
  {
    id: 41,
    title: "iPhone 13 Pro Max",
    description:
      "Apple's flagship iPhone with a stunning 6.7-inch Super Retina XDR display, A15 Bionic chip, and advanced camera system.",
    price: 1099.99,
    rating: 4.9,
    images:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1679072989055",
  },
  {
    id: 42,
    title: "iPhone 13 Mini",
    description:
      "Compact iPhone with a 5.4-inch Super Retina XDR display, A15 Bionic chip, and dual-camera system in a pocket-friendly size.",
    price: 699.99,
    rating: 4.8,
    images:
      "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-mini-starlight/?wid=465&hei=465&fmt=webp",
  },
  {
    id: 43,
    title: "iPhone 13",
    description:
      "Mainstream iPhone with a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved low-light camera performance.",
    price: 799.99,
    rating: 4.7,
    images:
      "https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/0/10057216_8d6ad931_iPhone13.png",
  },
  {
    id: 44,
    title: "iPhone 12 Pro",
    description:
      "Powerful iPhone with a 6.1-inch Super Retina XDR display, A14 Bionic chip, and advanced triple-camera system with LiDAR.",
    price: 999.99,
    rating: 4.8,
    images:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000",
  },
  {
    id: 45,
    title: "iPhone 12 Mini",
    description:
      "Compact iPhone with a 5.4-inch Super Retina XDR display, A14 Bionic chip, and dual-camera system in a small form factor.",
    price: 699.99,
    rating: 4.7,
    images:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-mini-black-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202794000",
  },
  {
    id: 46,
    title: "iPhone 12",
    description:
      "Mainstream iPhone with a 6.1-inch Super Retina XDR display, A14 Bionic chip, and dual-camera system for great photography.",
    price: 799.99,
    rating: 4.7,
    images:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-mini-purple-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202791000",
  },
  {
    id: 47,
    title: "iPhone SE (2nd Gen)",
    description:
      "Budget-friendly iPhone with a 4.7-inch Retina HD display, A13 Bionic chip, and Touch ID for a familiar experience.",
    price: 399.99,
    rating: 4.6,
    images: "https://nypost.com/wp-content/uploads/sites/2/2023/09/ipho.jpg",
  },
  {
    id: 48,
    title: "iPhone 11 Pro Max",
    description:
      "Previous flagship iPhone with a 6.5-inch Super Retina XDR display, A13 Bionic chip, and triple-camera system with Night mode.",
    price: 1099.99,
    rating: 4.8,
    images:
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/Apple_iPhone11ProMax_space_grey_1?1703236633",
  },
  {
    id: 49,
    title: "iPhone 11",
    description:
      "Mainstream iPhone with a 6.1-inch Liquid Retina display, A13 Bionic chip, and dual-camera system for everyday photography.",
    price: 699.99,
    rating: 4.7,
    images:
      "https://assets-cdn.vtenh.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTArQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5816a6babb04bd8d8575cfc92ea2088b45a6b6ee/apple-iphone-11-64gb-6.1.jpg?locale=en",
  },
  {
    id: 50,
    title: "iPhone XR",
    description:
      "Colorful iPhone with a 6.1-inch Liquid Retina display, A12 Bionic chip, and Face ID for secure authentication.",
    price: 599.99,
    rating: 4.6,
    images:
      "https://s.yimg.com/ny/api/res/1.2/G80KGr9dm9KjAnCP2ECipQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMTIx/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/17f0470b7b7118065deaf6d844d8a6f7",
  },
  {
    id: 51,
    title: "iPhone XS Max",
    description:
      "Large-screen iPhone with a 6.5-inch Super Retina display, A12 Bionic chip, and dual-camera system for advanced photography.",
    price: 999.99,
    rating: 4.7,
    images:
      "https://topsuccess.ng/public/uploads/all/Qocs1tUEyr7ZGcHQ0VGv6sxVnjMkydSzQztEyLKi.jpg",
  },
  {
    id: 52,
    title: "iPhone XS",
    description:
      "Powerful iPhone with a 5.8-inch Super Retina display, A12 Bionic chip, and dual-camera system for impressive photos.",
    price: 899.99,
    rating: 4.7,
    images:
      "https://adminapi.applegadgetsbd.com/storage/media/large/2966-8928.jpg",
  },
  {
    id: 53,
    title: "iPhone X",
    description:
      "Revolutionary iPhone with a 5.8-inch Super Retina display, A11 Bionic chip, and Face ID for secure facial recognition.",
    price: 799.99,
    rating: 4.7,
    images:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61nfuFmjL2L.jpg",
  },
  {
    id: 54,
    title: "iPhone 8 Plus",
    description:
      "Large-screen iPhone with a 5.5-inch Retina HD display, A11 Bionic chip, and dual-camera system for great photos.",
    price: 699.99,
    rating: 4.6,
    images:
      "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-8-Plus-64GB-128GB-256GB-All-Colors-Factory-Unlocked-Cell-Phone-Refurbished-Good_0c94fa2e-1996-4efe-bb77-38993e33013e.c8ca62efa3b6d7ab43dac3ed3acf8a0b.jpeg",
  },
  {
    id: 55,
    title: "iPhone 8",
    description:
      "Mainstream iPhone with a 4.7-inch Retina HD display, A11 Bionic chip, and advanced 12MP camera for everyday use.",
    price: 599.99,
    rating: 4.6,
    images:
      "https://www.neolight.in/wp-content/uploads/2022/01/iphone8-red.jpg",
  },
  {
    id: 56,
    title: "iPhone 7 Plus",
    description:
      "Large-screen iPhone with a 5.5-inch Retina HD display, A10 Fusion chip, and dual-camera system for versatile photography.",
    price: 599.99,
    rating: 4.5,
    images:
      "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-7-plus/iphone-7-plus-rose-gold.jpg",
  },
  {
    id: 57,
    title: "iPhone 7",
    description:
      "Mainstream iPhone with a 4.7-inch Retina HD display, A10 Fusion chip, and improved 12MP camera for great shots.",
    price: 499.99,
    rating: 4.5,
    images:
      "https://www.tradeinn.com/f/13759/137594099/apple-iphone-7-128gb-4.7-refurbished.jpg",
  },
  {
    id: 58,
    title: "iPhone 6s Plus",
    description:
      "Large-screen iPhone with a 5.5-inch Retina HD display, A9 chip, and 3D Touch technology for enhanced interactions.",
    price: 499.99,
    rating: 4.4,
    images:
      "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP727/SP727-iphone6s-plus-gray-select-2015.png",
  },
  {
    id: 59,
    title: "iPhone 6s",
    description:
      "Mainstream iPhone with a 4.7-inch Retina HD display, A9 chip, and improved 12MP camera for quality photos.",
    price: 399.99,
    rating: 4.3,
    images:
      "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png",
  },
  {
    id: 60,
    title: "iPhone 6 Plus",
    description:
      "Large-screen iPhone with a 5.5-inch Retina HD display, A8 chip, and optical image stabilization for better photos.",
    price: 399.99,
    rating: 4.3,
    images:
      "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP727/SP727-iphone6s-plus-rosegold-select-2015.png",
  },
  // ... (previous iPhone entries)
  {
    id: 61,
    title: "MacBook Pro 16-inch",
    description:
      "Powerful laptop with a stunning 16-inch Retina display, Intel Core i9 processor, and AMD Radeon Pro graphics for professional use.",
    price: 2399.99,
    rating: 4.9,
    images:
      "https://khmersamnang.com/wp-content/uploads/2021/12/macbook-pro-16-m1-pro-late-2021-space-gray.jpg",
  },
  {
    id: 62,
    title: "Dell XPS 13",
    description:
      "Ultrabook with a 13.4-inch InfinityEdge display, 11th Gen Intel Core processors, and a sleek design for on-the-go productivity.",
    price: 1199.99,
    rating: 4.8,
    images:
      "https://itsolution-cambodia.com/wp-content/uploads/2023/03/Dell-XPS-13-9315.png",
  },
  {
    id: 63,
    title: "HP Spectre x360",
    description:
      "Convertible laptop with a 13.3-inch OLED display, 11th Gen Intel Core processors, and 2-in-1 flexibility for versatile use.",
    price: 1399.99,
    rating: 4.7,
    images:
      "https://storage.iserp.cloud/ice/inventory/item/media/1652930981295-99.PNG?transform=1&format=webp&width=1200&quality=100",
  },
  {
    id: 64,
    title: "Lenovo ThinkPad X1 Carbon",
    description:
      "Business ultrabook with a 14-inch display, Intel Core i7 processor, and robust security features for professional users.",
    price: 1499.99,
    rating: 4.8,
    images:
      "https://p2-ofp.static.pub/fes/cms/2023/05/30/webi9et9bh61fej6nl54nrxnwrz8lu648215.png",
  },
  {
    id: 65,
    title: "Asus ROG Zephyrus G14",
    description:
      "Gaming laptop with a 14-inch display, AMD Ryzen 9 processor, and NVIDIA GeForce RTX graphics for high-performance gaming.",
    price: 1599.99,
    rating: 4.7,
    images:
      "https://www.notebookcheck.net/uploads/tx_nbc2/rog_zephyrus_g14_2023.jpg",
  },
  {
    id: 66,
    title: "Acer Predator Helios 300",
    description:
      "Gaming laptop with a 15.6-inch Full HD display, Intel Core i7 processor, and NVIDIA GeForce RTX 3060 graphics for immersive gaming.",
    price: 1299.99,
    rating: 4.6,
    images: "https://m.media-amazon.com/images/I/81VNCWPxsVL.jpg",
  },
  {
    id: 67,
    title: "Acer Nitro 5",
    description:
      "Premium ultrabook with a 13.5-inch PixelSense touchscreen, 11th Gen Intel Core processors, and a sleek aluminum design.",
    price: 1299.99,
    rating: 4.7,
    images:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Z8NvO2TFL.jpg",
  },
  {
    id: 68,
    title: "Razer Blade 15",
    description:
      "Gaming laptop with a 15.6-inch display, Intel Core i7 processor, and NVIDIA GeForce RTX 3070 graphics for high-quality gaming experiences.",
    price: 1799.99,
    rating: 4.8,
    images:
      "https://assets3.razerzone.com/X_JIbJcZVdafCqHrPaAzvh_qaew=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
  },
  {
    id: 69,
    title: "LG Gram 17",
    description:
      "Ultra-lightweight laptop with a 17-inch display, Intel Core i7 processor, and long battery life for productivity on the go.",
    price: 1499.99,
    rating: 4.6,
    images:
      "https://www.lg.com/in/images/computers/md07571038/gallery/17Z90R-G-Laptop-front-view-with-keyboard-D-02.jpg",
  },
  {
    id: 70,
    title: "Dell Inspiron 14 2-in-1",
    description:
      "Convertible laptop with a 14-inch Full HD touchscreen, 11th Gen Intel Core processors, and flexible 2-in-1 design.",
    price: 799.99,
    rating: 4.5,
    images:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7435-2in1-amd/media-gallery/purple/notebook-inspiron-14-7435-t-fpr-purple-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3347&hei=3438&qlt=100,1&resMode=sharp2&size=3347,3438&chrss=full&imwidth=5000",
  },
  {
    id: 71,
    title: "HP Envy x360",
    description:
      "Convertible laptop with a 15.6-inch Full HD touchscreen, AMD Ryzen 7 processor, and AMD Radeon graphics for versatile use.",
    price: 1099.99,
    rating: 4.7,
    images:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81HEX40lz7L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 72,
    title: "Lenovo Legion 5",
    description:
      "Gaming laptop with a 15.6-inch display, AMD Ryzen 7 processor, and NVIDIA GeForce GTX 1660 Ti graphics for smooth gaming performance.",
    price: 999.99,
    rating: 4.6,
    images:
      "https://www.lenovo.com/medias/lenovo-laptops-legion-5-pro-gen-7-16-amd-hero.png?context=bWFzdGVyfHJvb3R8Mjk2NDEyfGltYWdlL3BuZ3xoNjcvaDE3LzE0ODAwNzA5MDU4NTkwLnBuZ3w4NTU4Y2E0NGI2NGMxYzI5ZWZhMGZmMzdhZGU4ZDgxNDE0MmU3MTcwM2NlODk4Yzk5YzA2ODNjMTU0YmMzNThl",
  },
  {
    id: 73,
    title: "Asus ZenBook 14",
    description:
      "Ultrabook with a 14-inch Full HD display, Intel Core i5 processor, and a compact design for on-the-go productivity.",
    price: 899.99,
    rating: 4.5,
    images:
      "https://eg-en.store.asus.com/media/catalog/product/z/e/zenbook_14_oled_ux3402va_04_2_1_1.jpg",
  },
  {
    id: 74,
    title: "Acer Aspire 5",
    description:
      "Budget-friendly laptop with a 15.6-inch Full HD display, AMD Ryzen 5 processor, and a reliable performance for everyday tasks.",
    price: 599.99,
    rating: 4.4,
    images:
      "https://bcscomputer.net/userfiles/product/1024x768/2b636a20c53e86a234e55b0bb81aeb7a.jpg",
  },
  {
    id: 75,
    title: "Microsoft Surface Book 3",
    description:
      "Detachable 2-in-1 laptop with a 13.5-inch PixelSense display, 10th Gen Intel Core processors, and versatile usage modes.",
    price: 1699.99,
    rating: 4.8,
    images:
      "https://news.microsoft.com/wp-content/uploads/prod/sites/566/2020/05/surface2-300x241.png",
  },
  {
    id: 76,
    title: "Razer Blade Stealth 13",
    description:
      "Ultrabook with a 13.3-inch display, Intel Core i7 processor, and NVIDIA GeForce GTX 1650 Ti graphics for portable gaming.",
    price: 1399.99,
    rating: 4.7,
    images:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71+TkW97MjL.jpg",
  },
  {
    id: 77,
    title: "Alienware m15 R4",
    description:
      "Gaming laptop with a 15.6-inch display, Intel Core i9 processor, and NVIDIA GeForce RTX 3080 graphics for premium gaming performance.",
    price: 2499.99,
    rating: 4.9,
    images: "https://cdn.mos.cms.futurecdn.net/KBBBEzxLqDdKr9RqS7LHa.jpg",
  },
  {
    id: 78,
    title: "HP Pavilion 15",
    description:
      "Mainstream laptop with a 15.6-inch Full HD display, AMD Ryzen 5 processor, and a sleek design for everyday computing.",
    price: 699.99,
    rating: 4.5,
    images:
      "https://images.khmer24.co/22-02-20/130816-hp-pavilion-14-11gen-1645345888-38153864-b.jpg",
  },
  {
    id: 79,
    title: "Lenovo Yoga C940",
    description:
      "Convertible laptop with a 14-inch 4K touchscreen, 10th Gen Intel Core processors, and Dolby Atmos audio for a premium multimedia experience.",
    price: 1299.99,
    rating: 4.7,
    images:
      "https://www.lenovo.com/medias/lenovo-laptop-yoga-c940-hero-14-1126.png?context=bWFzdGVyfHJvb3R8NDE5ODczfGltYWdlL3BuZ3xoNjgvaDdjLzE0MzQwOTMwMjczMzEwLnBuZ3xhNDk4OWQ1ZWJlN2M5MDRmNzA2NDllZjM2ODllNjg4ZjQ1YjkxY2Y0ZWZlZjE1YTY4YjBhMWI3ODk0MjRlZGZi",
  },
  {
    id: 80,
    title: "Acer Swift 3",
    description:
      "Ultrabook with a 14-inch Full HD display, AMD Ryzen 7 processor, and a lightweight design for on-the-go productivity.",
    price: 899.99,
    rating: 4.6,
    images:
      "https://i2.komnit.com/store/upload/images/express_2008_1/72313-OBTGVM/large/1597957206-OBTGVM.jpg",
  },
];

// var products = JSON.stringify(myproducts);

app.use(cors());

app.get("/api/product/all", (req, res) => {
  res.json({ products });
});

app.get("/api/product/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item.id === parseInt(id));

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running port 5000");
});
