import React, {FC} from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import style from './DatePicker.module.scss';

interface IDatePicker {
 

}

const DatePicker: FC<IDatePicker> = () => {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54')
    );
  const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
  };
  return (
      <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                  className={style.picker}
                  renderInput={(props) => <TextField {...props} />}
                  value={value}
                  onChange={handleChange}
              />
          </LocalizationProvider>
      </div>
  );
}

export default DatePicker