import { Section } from "./Section";
import {
  DeckAndPatioImages,
  FlooringImages,
  KitchenAndBathImages,
  RoofingImages,
  WoodworkingImages,
  OtherImages,
} from "../../../utils";

export function Showcase() {
  return (
    <section className="relative bg-maroon overflow-hidden pb-12">
      <div className="relative mx-6 my-8 pt-12 bg-white shadow-md rounded-lg">
        <div className="text-center mb-14 lg:mb-28">
          <span className="text-6xl text-black font-['Poppins'] font-heading font-extrabold">
            Portfolio
          </span>
        </div>
        <div className="grid grid-rows-auto grid-cols-1 gap-12 mx-4 pb-6">
            <Section title="Kitchen & Bath" images={KitchenAndBathImages} />
            <Section title="Flooring" images={FlooringImages} />
            <Section title="Roofing" images={RoofingImages} />
            <Section title="Deck & Patio" images={DeckAndPatioImages} />
            <Section title="Woodworking" images={WoodworkingImages} />
            {/* <Section title="Other" images={OtherImages} /> */}
        </div>
      </div>
    </section>
  );
}
