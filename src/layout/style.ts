import styled from "@emotion/styled";

interface Props {
    background?: string;
}

export const LayoutContainer = styled.div<Props>({
    label: "layout-container",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100vw",


}, props => ({
    background: props.background,
}))