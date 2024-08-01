const wrapper = document.querySelector(".slider_wrapper");
const items = document.querySelectorAll(".menu_item")

const products = [
    {
        id: 1,
        title: "Air Jordan 1 Low",
        price: 149,
        colors: [
            {
                code: "white",
                img: "./img/jordan.png"
            }, 
            
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ],
        description: "Air Jordans are a popular line of basketball shoes and athletic apparel produced by Nike, initially designed for and endorsed by NBA legend Michael Jordan. First released in 1985, the iconic sneakers have since become a cultural phenomenon, renowned for their stylish designs and innovative technology. The brand's enduring legacy continues to influence sports, fashion, and sneaker culture globally."
    }, 
    
    {
        id: 2,
        title: "Air Force 1 '07",
        price: 109,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },

            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ], 
        description: "Nike Air Force is a line of athletic shoes first released by Nike in 1982. Designed by Bruce Kilgore, they were the first basketball shoes to use Nike Air technology for cushioning. Known for their versatile style, they have become a cultural icon beyond sports, particularly in hip-hop and streetwear fashion. The classic Air Force 1 model, available in low, mid, and high-top versions, remains popular for its clean design and comfort. Over the years, numerous collaborations and limited editions have kept the Air Force line fresh and highly sought after."
    }, 
    
    {
        id: 3,
        title: "Air Max Excee",
        price: 219,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },

            {
                code: "white",
                img: "./img/crater2.png"
            }
        ],
        description: "Nike Air Max is a series of athletic shoes introduced by Nike in 1987, featuring visible Air cushioning units in the midsole. The innovative design, pioneered by Tinker Hatfield, combines performance with a distinct aesthetic appeal. Known for their superior comfort and support, Air Max shoes have transcended their athletic origins to become a staple in streetwear and fashion. Each year, new models and colorways are released, maintaining the line's popularity and cultural relevance. Iconic models like the Air Max 1, Air Max 90, and Air Max 95 remain highly popular among sneaker enthusiasts."
    }, 
    
    {
        id: 4,
        title: "Infinity RN4",
        price: 139,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
        
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ],
        description: "Nike Flyknit is a range of athletic footwear featuring a revolutionary, lightweight knit upper made from polyester yarn. Introduced in 2012, the Flyknit technology provides a snug, sock-like fit, offering both flexibility and support. Designed for performance, Flyknit shoes are used in various sports, including running and basketball, due to their breathability and minimal weight. The seamless construction reduces waste, aligning with Nike's sustainability efforts. Popular models include the Flyknit Racer and Flyknit Lunar series, praised for their innovative design and comfort."
    },

    {
        id: 5,
        title: "Blazer Mid '77 Premium",
        price: 89,
        colors: [
            {
                code: "white", 
                img: "./img/blazer.png"
            },

            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ],
        description: "Nike Blazers are classic sneakers originally introduced in 1973 as Nike's first basketball shoe. Known for their high-top design, they feature a simple yet stylish silhouette with a prominent Swoosh logo. Over the years, the Blazers have transitioned from the basketball courts to becoming a staple in streetwear and skateboarding culture. Renowned for their durability and versatility, they are available in various materials, including leather, suede, and canvas. The Nike Blazer continues to be popular for its retro aesthetic and timeless appeal."
    }
]

let chosen_product = products[0];

const chosen_image = document.querySelector(".product_image");
const chosen_name = document.querySelector(".product_title");
const chosen_price = document.querySelector(".product_price");
const chosen_description = document.querySelector(".product_description");
const chosen_colors = document.querySelectorAll(".color");
const chosen_sizes = document.querySelectorAll(".size");

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        chosen_product = products[index];

        chosen_name.textContent = chosen_product.title;
        chosen_price.textContent = "$" + chosen_product.price;
        chosen_image.src = chosen_product.colors[0].img;
        chosen_description.textContent = chosen_product.description;

        chosen_colors.forEach((color, idx) => {
            color.style.backgroundColor = chosen_product.colors[idx].code; 
        })
    });
});

chosen_colors.forEach((color, index) => {
    color.addEventListener("click", () => {
        chosen_image.src = chosen_product.colors[index].img;
    })
})

chosen_sizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        chosen_sizes.forEach((sizes) => {
            sizes.style.backgroundColor = "white";
            sizes.style.color = "black";
        })
        
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
})

const product_button = document.querySelector(".product_button");
const checkout_portal = document.querySelector(".payment_portal");
const close_button = document.querySelector(".close");

product_button.addEventListener("click", () => {
    checkout_portal.style.display = "flex";
})

close_button.addEventListener("click", () => {
    checkout_portal.style.display = "none";
})

