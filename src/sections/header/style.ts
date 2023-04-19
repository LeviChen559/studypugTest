import styled from '@emotion/styled'

interface Props {
  background?: string | undefined;
  display?: string 
}

export const HeaderWrapper= styled.div<Props>(
  {
    // background: '#4BA4CB',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    width: "100vw",
    position: "fixed",
    zIndex: 1000,
    "@media (max-width: 768px)": {
      height: 80,
    },
    "@media (max-width: 400px)": {
      height: 65,
    }
  },
  props => ({
    background: props.background
  })
)

export const HeaderContainer= styled.div(
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    props => ({
    //   fontSize: props.fontSize
    })
  )


  export const HeaderContainerLeft= styled.div(
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "27.5%",
      "@media (max-width: 1200px)": {
        width: "300px",
      },
      "@media (max-width: 768px)": {
        width: "150px",
      },
          "@media (max-width: 400px)": {
        width: "130px",
      }
    },
    props => ({
    //   fontSize: props.fontSize
    })
  )

  export const HeaderContainerRight= styled.div<Props>(
    { position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "30%",
      "@media (max-width: 1200px)": {
        width: "350px",
      },
      "@media (max-width: 768px)": {
        width: "250px",
         justifyContent: "space-evenly",
      },
      "@media (max-width: 400px)": {
        width: "150px",
        justifyContent: "space-between",
      },
    },
    props => ({
     
    })
  )
  export const HeaderContainerRightNoFlag= styled.div(
    { position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "30%",
      "@media (max-width: 1200px)": {
        width: "300px",
      },
      "@media (max-width: 768px)": {
        width: "200px",
         justifyContent: "space-evenly",
      },
      "@media (max-width: 400px)": {
        width: "125px",
        justifyContent: "space-between",
      },
    },
    props => ({
    //   fontSize: props.fontSize
    })
  )