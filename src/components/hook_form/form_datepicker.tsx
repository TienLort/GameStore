import React from 'react';
import { FormControl, SxProps, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Control, Controller } from 'react-hook-form';

interface IProps {
  control: Control<any, any>;
  name: string;
  label: string;
  size?: 'small' | 'medium';
  disabled?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
  margin?: 'none' | 'dense' | 'normal';
  required?: boolean;
  sx?: SxProps;
  maxDate?: Date;
  handleChange?: (name: string, value: any) => void;
}

export const FormDatePicker = (props: IProps) => {
  const {
    control,
    sx,
    name,
    label,
    size = 'small',
    disabled = false,
    variant = 'outlined',
    margin = 'dense',
    required = false,
    maxDate,
    handleChange,
  } = props;

  return (
    <Controller
      name={name}
      rules={{
        required: {
          value: required,
          message: 'Vui lòng nhập trường này!',
        },
      }}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
        <FormControl required={required} fullWidth size={size} margin={margin} sx={sx}>
          <DatePicker
            disabled={disabled}
            label={label}
            value={value}
            onChange={onChange}
            maxDate={maxDate}
            onAccept={(value) => {
              if (handleChange) {
                handleChange(name, value);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                disabled={disabled}
                size={size}
                variant={variant}
                fullWidth
                error={invalid}
                helperText={error ? error.message : null}
              />
            )}
          />
        </FormControl>
      )}
    />
  );
};
