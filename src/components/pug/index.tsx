import React from "react";
import pug from "../../assets/pug.webp";
import Image from "next/image";
import {PugImage} from "./style";
import {FC} from "react";

interface Props {
    marginTop?: number;
}

const PugComponent: FC<Props> = ({marginTop}) => {
    return (
        <PugImage marginTop={marginTop}>
            <Image
                src={pug}
                fill
                alt="pug_image"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
        </PugImage>
    );
};

export default PugComponent;
