import styled from "@emotion/styled";

export const ProcessBarContainer = styled.div({
    height: "100%",
    width: 1280,
    margin: 16,
    "@media (max-width:1280px)":{
        width:"100%"
    },

})

export const ProcessStick = styled.div({
    height: 8,
    width: "100%",
    background: "#F3E5DA",
    borderRadius: 4
}, (props: { background?: string }) => ({
    background: props.background
})
)