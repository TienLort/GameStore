import { yupResolver } from '@hookform/resolvers/yup';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Scrollbars from 'react-custom-scrollbars-2';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FormInput, FormTextarea } from 'src/components/hook_form';
import { FormDateTimePicker } from 'src/components/hook_form/form_datetimepicker';
import { useAppDispatch, useAppSelector } from 'src/redux_store';
import * as yup from 'yup';
import FormEditor from '../form_editor';
import { useStyles } from './styles';

const AddNewPost = () => {
  const [urlImage, setUrlImage] = useState<string>('');
  const [postId, setPostId] = useState<string>('');
  const [height, setHeight] = useState<number>(450);
  const { id } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();

  const [body, setBody] = useState('');

  const handleChangeFileImage = (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('files', file);
  };
  const moveBackPostManagement = () => {
    navigate('/posts');
  }

  const { control } = useForm();

  return (
    <Box className={classes.container}>
      <Box
        sx={{
          width: '100%',
          height: '45px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          borderRadius: '1px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <IconButton>
          <ArrowBackOutlinedIcon onClick={moveBackPostManagement} />
        </IconButton>
      </Box>

      <Box className={classes.boxEditor}>
        <Box className={classes.formEditor} id="boxFormEditor">
          <FormEditor
            body={body}
            height={Number(height)}
            handleChangeBody={(value) => setBody(value)}
          />
        </Box>

        <Box className={classes.detailEditor}>

          <Box
            sx={{
              width: '100%',
              height: '100%',
              padding: '0 5px',
            }}
          >
            <FormInput control={control} name="title" label="Tiêu đề" />
            <FormTextarea control={control} name="description" label="Mô tả" minRows={6} />
            <FormInput control={control} name="author" label="Tác giả" />

            {/* <Box className={classes.boxImage}>
              <Button
                color="primary"
                variant="contained"
                startIcon={<AddPhotoAlternateOutlinedIcon />}
                sx={{ height: '40px' }}
                component="label"
              >
                Ảnh cover
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => handleChangeFileImage(e)}
                />
              </Button>
              <Box
                sx={{
                  width: '300px',
                  height: '180px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={urlImage || 'https://fucoidannano.com/img/no_img.png'}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box> */}
            <FormDateTimePicker
              control={control}
              name="publishedAt"
              minDate={new Date()}
              label="Ngày đăng"
              minutesStep={60}
            />
            <Box>
              <Button onClick={moveBackPostManagement}>OK</Button>
            </Box>
            {/* <Box
              sx={{ width: '100%', display: 'grid', placeItems: 'center', marginTop: '20px' }}
            >
              {!id ? (
                <Button variant="contained" onClick={moveBackPostManagement}>
                  THÊM MỚI
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="warning"
                  onClick={moveBackPostManagement}
                >
                  CẬP NHẬT
                </Button>
              )}
            </Box> */}
          </Box>

        </Box>
      </Box>
    </Box>

  );
};

export default AddNewPost;
