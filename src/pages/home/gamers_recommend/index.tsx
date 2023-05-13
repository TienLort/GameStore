import { Box } from '@mui/system';
import { Button, Chip, Container, Grid, Paper, Rating, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react';
import 'src/scss/_home.scss'
import { useStyles } from './styles';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import { IGameHome } from 'src/types/game';
import { SlickSlider } from 'src/components/slick_slider';

interface IProps {
  gamesHome: IGameHome[]
}

const GamersRecommend = ({ gamesHome }: IProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }} className="WantedSlider">
      <Typography variant="body1" className={classes.otherNewsTitle}>
        Spring Sale Flash Deals
      </Typography>
      <SlickSlider infinite={true} slidesToScroll={1} slidesToShow={1} autoplay={true} autoplaySpeed={4000} pauseOnHover={true}>
        <Box sx={{
          display: 'flex !important',
          backgroundColor: '#2b2b2b',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          <Box flex={9 / 20}>
            <img src="https://fanatical.imgix.net/product/original/9c558239-980a-4da5-89ac-be309f6b282c.jpeg?auto=compress,format&w=620&fit=crop&h=349" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box flex={11 / 20}>
            <Typography variant='h4'>
              Fanatical Gamers Recommend
            </Typography>
            <Rating defaultValue={4} max={5} readOnly emptyIcon={<StarIcon sx={{ color: '#616161' }} fontSize="inherit" />} />
            <Box sx={{
              display: 'flex',
              gap: '6px'
            }}>
              <Chip label="AFK" sx={{ backgroundColor: '#424242' }} />
              <Chip label="LOF" sx={{ backgroundColor: '#424242' }} />
              <Chip label="game" sx={{ backgroundColor: '#424242' }} />
              <Chip label="shot gun" sx={{ backgroundColor: '#424242' }} />
            </Box>
            <Typography sx={{
              height: '50%',
            }}>
              Gắn bó 18 năm với nghề giáo, cô Trần Thị Liên (giáo viên dạy Toán một trường THPT tại quận Cầu Giấy, Hà Nội) cho biết, dạy thêm trong thời đại hiện nay không hoàn toàn xấu và tiêu cực như nhiều người lên án.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography>
                Read full review
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <Typography>
                  Read full review
                </Typography>
                <Button variant="contained" startIcon={<DeleteIcon />}>1</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex !important',
          justifyContent: 'space-around',
          backgroundColor: '#2b2b2b',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          <Box flex={9 / 20}>
            <img src="https://fanatical.imgix.net/product/original/9c558239-980a-4da5-89ac-be309f6b282c.jpeg?auto=compress,format&w=620&fit=crop&h=349" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box flex={11 / 20}>
            <Typography variant='h4'>
              Fanatical Gamers Recommend
            </Typography>
            <Rating defaultValue={4} max={5} readOnly emptyIcon={<StarIcon sx={{ color: '#616161' }} fontSize="inherit" />} />
            <Box sx={{
              display: 'flex',
              gap: '6px'
            }}>
              <Chip label="AFK" sx={{ backgroundColor: '#424242' }} />
              <Chip label="LOF" sx={{ backgroundColor: '#424242' }} />
              <Chip label="game" sx={{ backgroundColor: '#424242' }} />
              <Chip label="shot gun" sx={{ backgroundColor: '#424242' }} />
            </Box>
            <Typography sx={{
              height: '50%',
            }}>
              Gắn bó 18 năm với nghề giáo, cô Trần Thị Liên (giáo viên dạy Toán một trường THPT tại quận Cầu Giấy, Hà Nội) cho biết, dạy thêm trong thời đại hiện nay không hoàn toàn xấu và tiêu cực như nhiều người lên án.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography>
                Read full review
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <Typography>
                  Read full review
                </Typography>
                <Button variant="contained" startIcon={<DeleteIcon />}>1</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex !important',
          justifyContent: 'space-around',
          backgroundColor: '#2b2b2b',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          <Box flex={9 / 20}>
            <img src="https://fanatical.imgix.net/product/original/9c558239-980a-4da5-89ac-be309f6b282c.jpeg?auto=compress,format&w=620&fit=crop&h=349" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box flex={11 / 20}>
            <Typography variant='h4'>
              Fanatical Gamers Recommend
            </Typography>
            <Rating defaultValue={4} max={5} readOnly emptyIcon={<StarIcon sx={{ color: '#616161' }} fontSize="inherit" />} />
            <Box sx={{
              display: 'flex',
              gap: '6px'
            }}>
              <Chip label="AFK" sx={{ backgroundColor: '#424242' }} />
              <Chip label="LOF" sx={{ backgroundColor: '#424242' }} />
              <Chip label="game" sx={{ backgroundColor: '#424242' }} />
              <Chip label="shot gun" sx={{ backgroundColor: '#424242' }} />
            </Box>
            <Typography sx={{
              height: '50%',
            }}>
              Gắn bó 18 năm với nghề giáo, cô Trần Thị Liên (giáo viên dạy Toán một trường THPT tại quận Cầu Giấy, Hà Nội) cho biết, dạy thêm trong thời đại hiện nay không hoàn toàn xấu và tiêu cực như nhiều người lên án.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography>
                Read full review
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <Typography>
                  Read full review
                </Typography>
                <Button variant="contained" startIcon={<DeleteIcon />}>1</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex !important',
          justifyContent: 'space-around',
          backgroundColor: '#2b2b2b',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          <Box flex={9 / 20}>
            <img src="https://fanatical.imgix.net/product/original/9c558239-980a-4da5-89ac-be309f6b282c.jpeg?auto=compress,format&w=620&fit=crop&h=349" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box flex={11 / 20}>
            <Typography variant='h4'>
              Fanatical Gamers Recommend
            </Typography>
            <Rating defaultValue={4} max={5} readOnly emptyIcon={<StarIcon sx={{ color: '#616161' }} fontSize="inherit" />} />
            <Box sx={{
              display: 'flex',
              gap: '6px'
            }}>
              <Chip label="AFK" sx={{ backgroundColor: '#424242' }} />
              <Chip label="LOF" sx={{ backgroundColor: '#424242' }} />
              <Chip label="game" sx={{ backgroundColor: '#424242' }} />
              <Chip label="shot gun" sx={{ backgroundColor: '#424242' }} />
            </Box>
            <Typography sx={{
              height: '50%',
            }}>
              Gắn bó 18 năm với nghề giáo, cô Trần Thị Liên (giáo viên dạy Toán một trường THPT tại quận Cầu Giấy, Hà Nội) cho biết, dạy thêm trong thời đại hiện nay không hoàn toàn xấu và tiêu cực như nhiều người lên án.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography>
                Read full review
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <Typography>
                  Read full review
                </Typography>
                <Button variant="contained" startIcon={<DeleteIcon />}>1</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={
          {
            display: 'flex !important',
            justifyContent: 'space-around',
            backgroundColor: '#2b2b2b',
            borderRadius: '6px',
            overflow: 'hidden',
          }
        }>
          <Box flex={9 / 20}>
            <img src="https://fanatical.imgix.net/product/original/9c558239-980a-4da5-89ac-be309f6b282c.jpeg?auto=compress,format&w=620&fit=crop&h=349" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box flex={11 / 20}>
            <Typography variant='h4'>
              Fanatical Gamers Recommend
            </Typography>
            <Rating defaultValue={4} max={5} readOnly emptyIcon={<StarIcon sx={{ color: '#616161' }} fontSize="inherit" />} />
            <Box sx={{
              display: 'flex',
              gap: '6px'
            }}>
              <Chip label="AFK" sx={{ backgroundColor: '#424242' }} />
              <Chip label="LOF" sx={{ backgroundColor: '#424242' }} />
              <Chip label="game" sx={{ backgroundColor: '#424242' }} />
              <Chip label="shot gun" sx={{ backgroundColor: '#424242' }} />
            </Box>
            <Typography sx={{
              height: '50%',
            }}>
              Gắn bó 18 năm với nghề giáo, cô Trần Thị Liên (giáo viên dạy Toán một trường THPT tại quận Cầu Giấy, Hà Nội) cho biết, dạy thêm trong thời đại hiện nay không hoàn toàn xấu và tiêu cực như nhiều người lên án.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography>
                Read full review
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <Typography>
                  Read full review
                </Typography>
                <Button variant="contained" startIcon={<DeleteIcon />}>1</Button>
              </Box>
            </Box>
          </Box>
        </Box >
        <Box sx={{
          display: 'flex !important',
          justifyContent: 'space-around',
          backgroundColor: '#2b2b2b',
          borderRadius: '6px',
          overflow: 'hidden',
        }
        }>
          <Box flex={9 / 20}>
            <img src="https://fanatical.imgix.net/product/original/9c558239-980a-4da5-89ac-be309f6b282c.jpeg?auto=compress,format&w=620&fit=crop&h=349" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box flex={11 / 20}>
            <Typography variant='h4'>
              Fanatical Gamers Recommend
            </Typography>
            <Rating defaultValue={4} max={5} readOnly emptyIcon={<StarIcon sx={{ color: '#616161' }} fontSize="inherit" />} />
            <Box sx={{
              display: 'flex',
              gap: '6px'
            }}>
              <Chip label="AFK" sx={{ backgroundColor: '#424242' }} />
              <Chip label="LOF" sx={{ backgroundColor: '#424242' }} />
              <Chip label="game" sx={{ backgroundColor: '#424242' }} />
              <Chip label="shot gun" sx={{ backgroundColor: '#424242' }} />
            </Box>
            <Typography sx={{
              height: '50%',
            }}>
              Gắn bó 18 năm với nghề giáo, cô Trần Thị Liên (giáo viên dạy Toán một trường THPT tại quận Cầu Giấy, Hà Nội) cho biết, dạy thêm trong thời đại hiện nay không hoàn toàn xấu và tiêu cực như nhiều người lên án.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography>
                Read full review
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}>
                <Typography>
                  Read full review
                </Typography>
                <Button variant="contained" startIcon={<DeleteIcon />}>1</Button>
              </Box>
            </Box>
          </Box>
        </Box >
      </SlickSlider >
    </Container >
  );
}

export default GamersRecommend






