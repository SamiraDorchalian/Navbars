const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
const topContainer = document.querySelector(".top-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

// navbarEl.innerHTML=`
//     <a href="./index.html"><img src="./download.svg" alt="logo_svg"></a>
//     <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Blog</a></li>
//         <li><a href="#">Contact</a></li>
//     </ul>
// `
const tagA = document.createElement("a");
tagA.href = "./index.html";
navbarEl.appendChild(tagA);
const tagImg = document.createElement("img");
tagImg.src = "./download.svg";
tagImg.alt = "logo_svg";
tagA.appendChild(tagImg);
const tagUl = document.createElement("ul");
navbarEl.appendChild(tagUl);
const tagLi = document.createElement("li");
tagUl.appendChild(tagLi);
const HomeLi = document.createElement("a");
HomeLi.href = "#";
HomeLi.innerText = "Home";
tagLi.appendChild(HomeLi);
const BlogLi = document.createElement("a");
BlogLi.href = "#";
BlogLi.innerText = "Blog";
tagLi.appendChild(BlogLi);
const ContactLi = document.createElement("a");
ContactLi.href = "#";
ContactLi.innerText = "Contact";
tagLi.appendChild(ContactLi);

const h1_Tag = document.createElement("h1");
h1_Tag.innerText = "Welcome to our website";
topContainer.appendChild(h1_Tag);

const tagP_1 = document.createElement("p");
tagP_1.classList = "text";
tagP_1.innerText =
  "K-pop (Korean: 케이팝; RR: keipap), short for Korean popular music,[1] is a form of popular music originating in South Korea as part of South Korean culture.[2] It includes styles and genres from around the world, such as pop, hip hop, R&B, rock, jazz, gospel, reggae, electronic dance, folk, country, disco, and classical on top of its traditional Korean music roots.[3] The term 'K-pop' became popular in the 2000s, especially in the international context. The Korean term for domestic pop music is gayo (가요; 歌謠), which is still widely used within South Korea.[4][5] While 'K-pop' can refer to all popular music or pop music from South Korea, it is colloquially often used in a narrower sense for any Korean music and artists associated with the entertainment and idol industry in the country, regardless of the genre.";
bottomContainerEl.appendChild(tagP_1);
const tagP_2 = document.createElement("p");
tagP_2.classList = "text";
tagP_2.innerText =
  "A Korean drama (Korean: 한국 드라마; RR: Han-guk deurama), more popularly known as Koreanovela or K-drama, is a type of television series in the Korean language made in South Korea. They are popular worldwide, especially in Asia, partially due to the spread of Korean popular culture (the 'Korean Wave') and their widespread availability via streaming services, which often offer subtitles in multiple languages. Many K-dramas have been translated internationally, and some of them have had a significant influence in other nations. In other countries, traditional television channels have broadcast some of the most well-known dramas.";
bottomContainerEl.appendChild(tagP_2);
const tagP_3 = document.createElement("p");
tagP_3.classList = "text";
tagP_3.innerText =
  "Korean dramas have attracted international attention for their fashion, style, and culture. Their rise in popularity has given a great boost to fashion lines. The Korean Wave, or Hallyu, had great impacts on countries around the world. With the wave came Korean TV dramas. In the late 2000s, South Korea was producing more 'TV' dramas than ever before. (Tilland, 2021) The most successful dramas incorporate skillful combinations of familial affection, sex appeal, and emotional desirability. The demand for K-drama has only increased over the last twenty years after it was nearly destroyed due to Hollywood films, Japanese pop culture, and the financial crisis that hit South Korea in 1997. (Ingyu, 2017) K-dramas continue to gain traction internationally today.";
bottomContainerEl.appendChild(tagP_3);
const tagP_4 = document.createElement("p");
tagP_4.classList = "text";
tagP_4.innerText =
  "The attention K-dramas receive has also inspired many to visit South Korea. According to a report published in The Korea Herald, more than half of the tourists that visited South Korea came after watching Korean dramas. (Impact of Korean Dramas on the World, 2022) Most Korean dramas are filmed on location, highlighting the beauty of the country and drawing in more tourists (e.g., Crash Landing on You, which was filmed in Switzerland and South Korea). These TV series can also be described as emotionally addictive and are universally appealing due to the relatability of the content. These universal themes include love, family, and personal growth. The characters in K-dramas are often complex and multi-layered, making them more interesting and engaging to watch. (Sejong, 2023)";
bottomContainerEl.appendChild(tagP_4);
const tagP_5 = document.createElement("p");
tagP_5.classList = "text";
tagP_5.innerText =
  "Modern K-pop 'idol' culture began in the 1990s, as K-pop idol music grew into a subculture that amassed enormous fandoms of teenagers and young adults.[7][8] After a slump in early idol music, from 2003, TVXQ and BoA started a new generation of K-pop idols that broke the music genre into the neighboring Japanese market and continue to popularize K-pop internationally today.[9][10] With the advent of online social networking services and South Korean TV shows, the current spread of K-pop and South Korean entertainment, known as the Korean Wave, is seen not only in East Asia and Southeast Asia, but also in Pakistan, Bangladesh, India, Latin America, North Africa, Southern Africa and East Africa, the Middle East, and throughout the Western world, gaining an international audience.";
bottomContainerEl.appendChild(tagP_5);

const conditionalEl = () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
};

window.addEventListener("scroll", conditionalEl);
