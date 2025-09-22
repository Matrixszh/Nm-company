import { Store } from "pullstate";

type ButtonDataType = {
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string;
};

type ButtonType = "Trust" | "Volume" | "Bespoke";

export const SpecialityStore = new Store({
  selectedButton: "Trust" as ButtonType,
  buttonData: {
    Trust: {
      title: "Decades of Trust",
      description: "Two Decades of Trust, Now with Next-Gen Innovation Legacy Meets Fresh Vision: With 20+ years as Hyderabad’s event pioneers, we combine time-tested expertise with a new wave of talent trained under India’s top event giants (Wizcraft, TWS).",
      content: "Two Decades of Trust, Now with Next-Gen Innovation Legacy Meets Fresh Vision: With 20+ years as Hyderabad’s event pioneers, we combine time-tested expertise with a new wave of talent trained under India’s top event giants (Wizcraft, TWS).",
      footer: "Footer information for Button 1",
      image: "/img3.jpg",
    },
    Volume: {
      title: "Telangana’s Largest Inventory",
      description: "Unmatched Scale & Flexibility One-Stop Grandeur: From luxury mandaps to cutting-edge AV setups, our vast in-house inventory eliminates vendor dependencies, ensuring seamless execution and cost efficiency.",
      content: "Unmatched Scale & Flexibility One-Stop Grandeur: From luxury mandaps to cutting-edge AV setups, our vast in-house inventory eliminates vendor dependencies, ensuring seamless execution and cost efficiency.",
      footer: "Footer information for Button 2",
      image: "/img2.jpg",
    },
    Bespoke: {
      title: "Bespoke Weddings",
      description: "Precision-Planned Hyper-Personalized Experiences: Our new-gen planners specialize in storytelling weddings, where every detail reflects the couple’s unique journey.",
      content: "Precision-Planned Hyper-Personalized Experiences: Our new-gen planners specialize in storytelling weddings, where every detail reflects the couple’s unique journey.",
      footer: "Footer information for Button 3",
      image: "/img1.jpg",
    },
  },
});
