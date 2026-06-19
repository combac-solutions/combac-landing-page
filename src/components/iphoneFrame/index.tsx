import { getAssetPath } from "../../utils/assets";

interface Props {
  src: string;
}

function IphoneFrame({ src }: Props) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute top-[2%] bottom-[2%] left-[4.5%] right-[4.5%]">
        <img
          src={getAssetPath(src)}
          alt="screenshot"
          className="rounded-[2rem] h-full w-full object-cover"
        />
      </div>
      <img
        src={getAssetPath("/misc/iphone-frame.webp")}
        alt="iphone-frame"
        className="relative z-10 h-full"
      />
    </div>
  );
}

export default IphoneFrame;
