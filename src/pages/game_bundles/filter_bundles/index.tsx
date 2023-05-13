import { Box, FormControl } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FormSelect } from 'src/components/hook_form';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
    const navigate = useNavigate();
    const ALL_DEFAULT = [
        { id: 'Top Sellers', name: 'Top Sellers' },
        { id: 'Lasted Deals', name: 'Lasted Deals' },
        { id: 'Ending Soon', name: 'Ending Soon' },
        { id: 'Price', name: 'Price' }
    ];
    const { control } = useForm<any>({
        defaultValues: {},
    });

    const handleFilter = (name: string, value: string) => {
        alert({ name, value })
    };

    const [activeGenre, setActiveGenre] = useState(0);
    return (
        <Box className="filter-container">
            <Box className="filter-box">
                <button
                    className={activeGenre === 0 ? "active" : ''}
                    onClick={() => navigate('/home')}
                >
                    All Bundles
                </button>
                <button
                    className={activeGenre === 1 ? "active" : ''}
                    onClick={() => navigate('/games')}
                >
                    Games
                </button>
                <button
                    className={activeGenre === 2 ? "active" : ''}
                    onClick={() => navigate('/bundles')}
                >
                    Books
                </button>
                <button
                    className={activeGenre === 2 ? "active" : ''}
                    onClick={() => navigate('/bundles')}
                >
                    Software
                </button>
            </Box>
            <Box className="filter-select">
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                    <FormSelect
                        keyOption="id"
                        name="stationId"
                        control={control}
                        label="chọn loại"
                        labelOption="name"
                        options={ALL_DEFAULT}
                        handleChange={handleFilter}
                    />
                </FormControl>
            </Box>
        </Box>
    )
}

export default Filter