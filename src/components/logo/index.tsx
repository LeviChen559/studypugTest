import Image, {StaticImageData} from "next/image";
import React, {FC} from "react";
import {useRouter} from "next/router";
import {ImageWrapper} from "./style";
import logoImage from "@/assets/studypug-big.png";
import logoImageSmall from "@/assets/studypug-small.png";
import {TabletDown, TabletUp} from "@/styles/commonStyle";

interface Props {
    src?: string | StaticImageData;
    alt?: string;
    priority?: boolean;
    quality?: number;
    width?: number;
    height?: number;
    blurDataURL?: string;
    locale: string;
}

const Logo: FC<Props> = ({locale}) => {
    const {asPath} = useRouter();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/parents/${locale}`);
    }
    return (
        <>
            <TabletUp onClick={handleClick}>
                <ImageWrapper >
                    <Image
                        src={logoImage}
                        alt={"logo"}
                        fill
                        style={{
                            objectFit: "contain",
                            filter: `${
                                asPath.includes("students") || asPath.includes("signup") || asPath.includes("payment")
                                    ? "invert(75%)"
                                    : "invert(0%)"
                            }`,
                        }}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                </ImageWrapper>
            </TabletUp>
            <TabletDown>
                <ImageWrapper>
                    <Image
                        src={logoImageSmall}
                        alt={"logo"}
                        fill
                        style={{
                            objectFit: "contain",
                            filter: `${
                                asPath.includes("students") || asPath.includes("signup") || asPath.includes("payment")
                                    ? "invert(75%)"
                                    : "invert(0%)"
                            }`,
                        }}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                </ImageWrapper>
            </TabletDown>
        </>
    );
};
export default Logo;
