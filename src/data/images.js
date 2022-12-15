const CATEGORY_IMAGES = {
  Burger: [
    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4062273/pexels-photo-4062273.jpeg?auto=compress&cs=tinysrgb&w=400"
  ],
  Pizza: [
    "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2180875/pexels-photo-2180875.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3343626/pexels-photo-3343626.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/5792322/pexels-photo-5792322.jpeg?auto=compress&cs=tinysrgb&w=400"
  ],
  Salad: [
    "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1332275/pexels-photo-1332275.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1484519/pexels-photo-1484519.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  Soup: [
    "https://images.pexels.com/photos/691159/pexels-photo-691159.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1707270/pexels-photo-1707270.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3702434/pexels-photo-3702434.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1350509/pexels-photo-1350509.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3296680/pexels-photo-3296680.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6072108/pexels-photo-6072108.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  Beverage: [
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1126975/pexels-photo-1126975.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11937561/pexels-photo-11937561.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  Wrap: [
    "https://images.pexels.com/photos/5837103/pexels-photo-5837103.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12123661/pexels-photo-12123661.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4869465/pexels-photo-4869465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4955267/pexels-photo-4955267.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5840308/pexels-photo-5840308.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5837189/pexels-photo-5837189.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  Icecream: [
    "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1343465/pexels-photo-1343465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
};

export const getRandomCategoryImg = (category) => {
    const images = CATEGORY_IMAGES[category];
    // console.log("DEBUG: images", images);
    if (!images || !images.length) return null;
    // console.log("DEBUG: returning", images[Math.floor(Math.random() * images.length)]);
    return images[Math.floor(Math.random() * images.length)];
  };