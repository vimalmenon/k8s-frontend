import { styled } from '@mui/material/styles';


const FooterStyle = styled("footer")(({ theme }) => {
  return {
    background: theme.palette.grey["100"],
    display: "flex",
    height: "50px",
    justifyContent: "right",
    alignItems: "center",
    padding: theme.spacing(0, 2)
  }
})

export const Footer: React.FC = () => {
  return (
    <FooterStyle>
      {'Copyright © '}
      All right reserve
    </FooterStyle>
  );
}
