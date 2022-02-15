interface SectionProps {
  title: string;
  images: Array<string>;
}

export function Section(props: SectionProps) {
  return (
    <div>
      <h3 className="font-['Poppins'] text-black text-3xl mb-6">{props.title}</h3>
      <div className="grid grid-rows-auto grid-cols-3 gap-4">
        {props.images
          ? props.images.map((image, i) => {
              return <img src={props.images[i]} alt="" />;
            })
          : `There are no results`}
      </div>
    </div>
  );
}
