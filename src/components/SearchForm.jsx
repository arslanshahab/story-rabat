import React, { Component } from 'react';
import MomentUtils from '@date-io/moment';
import { DatePicker, KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Grid, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SearchForm = (props) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="search-form">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container justify="space-around" alignItems="center">
                    <div>
                        <label className="d-block">Check In</label>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                    <div>
                        <label className="d-block">Check Out</label>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                    <FormControl className={classes.formControl}>
                        <label id="demo-simple-select-label">Room</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            placeholder="Age"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    <button className="btn-theme book-now-btn">
                        Book Now
                    </button>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default SearchForm;