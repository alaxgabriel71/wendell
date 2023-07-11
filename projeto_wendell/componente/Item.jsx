import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Produto from './Produto';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (

    <h1> Cardapio</h1>,

    <Box id="Card" sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/beijinho.png"} texto={"delicioso beijinho"}/> </Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/amendoim.png"} texto={"delicioso amendoim"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Ninho</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <img src="src/img/beijinho.png" alt="amendoim" width="150px" height="300px" />
            <h3 id='ingre'>Amendoim</h3>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Bandeja com 12 doces</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Coração com 8 doces</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Barca pequena 20 doces grandes</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Barca grande 70 doces pequenos</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Ovos de colher</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Barra de chocolate</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Lembranças para festas</h3>}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Imagem  {<h3 id='ingre'>Rosa com doces personalizados</h3>}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
