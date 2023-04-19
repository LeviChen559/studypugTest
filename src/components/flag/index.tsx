import Image, { ImageLoader, StaticImageData} from "next/image";
import React, {FC} from "react";
import Canada from "@/assets/flags/ca.png";

interface Props {
    src: string | StaticImageData;
    alt: string;
    priority?: boolean;
    width?: number;
    height?: number;
    blurDataURL?: string;
    loader?: ImageLoader;
    margin?: string;
}

const Flag: FC<Props> = ({src = Canada, alt, priority = false, width, height,margin}) => {
    return (
        <Image
            style={{margin:margin}}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
    );
};
export default Flag;
