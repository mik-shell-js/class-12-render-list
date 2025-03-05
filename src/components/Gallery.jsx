import GalleryCard from './GalleryCard'

export default function Gallery() {
  const galleryItems = [
    {
      imgUri: "/images/galaxy.webp",
      altText: "an AI generated galaxy",
      caption: "A galaxy",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    },
    {
      imgUri: "/images/asteroid.webp",
      altText: "an AI generated asteroid",
      caption: "An asteroid",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    },
    {
      imgUri: "/images/black-hole.webp",
      altText: "an AI generated black hole",
      caption: "A black hole",
      citation: "Microsoft Copilot",
      color: "#e58c43"
    },
    {
      imgUri: "/images/cloud-nebulae.webp",
      altText: "an AI generated cloud nebulae",
      caption: "Cloud nebulae",
      citation: "Microsoft Copilot",
      color: "#9ad2ea"
    },
    {
      imgUri: "/images/distant-space.webp",
      altText: "an AI generated distant space",
      caption: "",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    },
    {
      imgUri: "/images/galaxy-collision.webp",
      altText: "an AI generated galaxy collision",
      caption: "",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    },
    {
      imgUri: "/images/moon.webp",
      altText: "an AI generated moon",
      caption: "",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    },
    {
      imgUri: "/images/pulsar.webp",
      altText: "an AI generated pulsar",
      caption: "A pulsar",
      citation: "Microsoft Copilot",
      color: "#d9b5ea"
    },
    {
      imgUri: "/images/star-death.webp",
      altText: "an AI generated star death",
      caption: "",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    },
    {
      imgUri: "/images/sun.webp",
      altText: "an AI generated sun",
      caption: "",
      citation: "Microsoft Copilot",
      color: "#ffffff" // Example color
    }
  ];

  return (
    <div className="gallery">
      {
        galleryItems.map((item, index) => (
          <GalleryCard
            key={index}
            imgUri={item.imgUri}
            altText={item.altText}
            caption={item.caption}
            citation={item.citation}
            color={item.color}
          />
        )
      )
      }
    </div>
  )
}
