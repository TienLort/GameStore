import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Typewriter from "typewriter-effect"
import { useStyles } from './styles';

const home = [
    {
        text1: "Du Lịch, Nghỉ Dưỡng, Vui Chơi",
        text2: "Hãy Khám Phá Với Chúng Tôi",
        text3: "Đi & Khám Phá Điểm Hẹn Hấp Dẫn",
        desc: 'Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn du lịch',
    },
]
const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Container maxWidth="lg" sx={{
                height: '280px',
                display: 'flex',
                justifyContent: 'center',
            }} >
                {home.map((val, i) => (
                    <Box className={classes.heroContent} key={i}>
                        <Box className={classes.heroDesc}>
                            <Typewriter
                                options={{
                                    strings: [`${val.text1}`, `${val.text2}`, `${val.text3}`],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </Box>
                        <Typography variant='h6' > {val.desc} </Typography>
                    </Box>
                ))}
                {/* <form
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                        className={classes.formControl}>
                        <Box className={classes.searchInput}>
                            <input type="text" name="searchPlace" placeholder="Tên quán, khu vực, kiểu quán,..." value="" className={classes.input} />
                        </Box>
                        <Box className={classes.searchBtn} >
                            <Button type="submit" className={classes.btn}>Tìm kiếm</Button>
                        </Box>
                    </form> */}
            </Container>
            <Box sx={{
                height: '40px',
                backgroundColor: '#fff',
            }}>
                <Container maxWidth="lg" sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItem: 'center',
                }} >
                    <Typography variant='h6' sx={{
                        color: '#000',
                        lineHeight: '2',
                        cursor: 'pointer'
                    }}> FREE BONUS! Get a scratchcard with a free game or coupon when you spend over</Typography>
                </Container>
            </Box>
        </Box >

    )
}
export default Banner 