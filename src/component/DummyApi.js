import React from 'react'

const DummyApi = () => {
  return (
    <div>DuyApi</div>
  )
}

export const Navbar = [
  {
    id: 1,
    logo: require("../images/common/banner.jpg"),
    item: "Home",
    icon: "SearchIcon"
  },
  {
    id: 2,
    item: "Contact",
    icon: "PersonIcon"
  },
  {
    id: 3,
    item: "services",
    icon: "PersonIcon"
  },
  {
    id: 4,
    item: "About",
    icon: "PersonIcon",
  }
]

export const Pages = ["Sweets", "Cakes", "Chips", "Burger", "Popcorn", "Honey"];

export const SliderContent = [
  {
    id: 1,
    img: require("../images/banner/banner-1.jpg"),
    addline: "Top seller Of The Week 1",
    title: "Choose Your Healthy Lifestyle 1 .",
    subtitle: "Presentation matters. Lorem ipsum dolor sit 1 ",
    btn: "Shop Now 1"
  },
  {
    id: 2,
    img: require("../images/banner/banner-2.jpg"),
    addline: "Top seller Of The Week 2",
    title: "Choose Your Healthy Lifestyle. 2",
    subtitle: "Presentation matters. Lorem ipsum dolor sit 2",
    btn: "Shop Now 2"
  },
  {
    id: 3,
    img: require("../images/banner/banner-3.jpg"),
    addline: "Top seller Of The Week",
    title: "Choose Your Healthy Lifestyle.",
    subtitle: "Presentation matters. Lorem ipsum dolor sit ",
    btn: "Shop Now"
  }
]

export const BannerContents = [
  {
    id: 1,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now"
  },
  {
    id: 2,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now"
  },
  {
    id: 3,
    offers: "Top Offers",
    title: "Banner Title",
    btn: "Shop Now"
  }
]


export const Offers = [
  {
    id: 1,
    addline: "Top offers",
    title: "Best Sweets",
    btn: "Shop Now"
  },
  {
    id: 2,
    addline: "Top offers",
    title: "Best Sweets",
    btn: "Shop Now"
  },
  {
    id: 3,
    addline: "Top offers",
    title: "Best Sweets",
    btn: "Shop Now"
  }
]

export const Categories = [
  {
    id: 1,
    name: 'Sweets',
    href: '../ProductOne.js',
    item: "6 items",
    imageSrc: require("../images/common/coffeecat.jpg"),
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    item: "4 items",
    imageSrc: require("../images/common/ghee.jpg"),
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    item: "12 items",
    imageSrc: require("../images/common/councat.jpg"),
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 4,
    name: 'Nomad Tumbler',
    href: '#',
    item: "16 items",
    imageSrc: require("../images/common/aval.jpg"),
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 5,
    name: 'Nomad Tumbler',
    href: '#',
    item: "13 items",
    imageSrc: require("../images/common/aval.jpg"),
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    item: "7 items",
    imageSrc: require("../images/common/aval.jpg"),
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  }
]



export default DummyApi;
