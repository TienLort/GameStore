import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from 'src/components/hook_form';
// import { IPayloadRegister } from 'src/types/auth';

// const initRegisterForm: IPayloadRegister = {
//     email: '',
//     password: '',
//     fullName: '',
// };

const schemaRegister = yup.object().shape({
    email: yup
        .string()
        .email('Email không hợp lệ')
        .required('Email không được bỏ trống.'),
    password: yup.string().required('Xin vui lòng nhập lại mật khẩu.').min(8),
    fullName: yup.string().required('Họ và tên không được bỏ trống'),
    confirmPassword: yup
        .string()
        .required('Password không được bỏ trống.')
        .min(8, 'Mật khẩu cần ít nhất 8 ký tự')
        .when('password', (password: string, field: any) =>
            password
                ? field
                    .required('Mật khẩu không khớp.')
                    .oneOf([yup.ref('password')], 'Mật khẩu không khớp.')
                : field
        ),
});

const RegisterForm = ({ onSubmit }: {
    onSubmit: (data: any) => void;
    // onSubmit: (data: IPayloadRegister) => void;
}) => {
    const { control, handleSubmit } = useForm({
        // defaultValues: initRegisterForm,
        defaultValues: {},
        resolver: yupResolver(schemaRegister),
    });

    // const handleOnSubmit = (data: IPayloadRegister) => {
    //     onSubmit(data);
    // };

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={1.5}
            mb={2}
            component="form"
            onSubmit={handleSubmit(() => {
                console.log('ok')
            })}
        >
            <FormInput control={control} name="email" label="Địa chỉ email" />
            <FormInput control={control} name="fullName" label="Nhập họ và tên" />

            <FormInput
                control={control}
                type="password"
                name="password"
                label="Nhập mật khẩu"
            />

            <FormInput
                control={control}
                type="password"
                name="confirmPassword"
                label="Nhập lại mật khẩu"
            />
            <Button
                onClick={handleSubmit(() => {
                    console.log('ok')
                })}
                variant="contained"
                sx={{
                    width: '100%',
                    py: 1.5,
                    fontSize: '16px',
                }}
            >
                Đăng ký
            </Button>
        </Box>
    );
};

export default RegisterForm;
