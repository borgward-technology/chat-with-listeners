import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150,  }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label"   sx={{ color: 'white' }} >Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{borderColor: 'white', color:'white'}}
        >
          <MenuItem value={10}>English (US)</MenuItem>
          <MenuItem value={20}>Afrikaans (ZA)</MenuItem>
          <MenuItem value={30}>Arabic (EG)</MenuItem>
          <MenuItem value={10}>Armenian (AM)</MenuItem>
          <MenuItem value={20}>Cambodian (KH)</MenuItem>
          <MenuItem value={30}>Chinese (CN)</MenuItem>
          <MenuItem value={10}>Danish (DK)</MenuItem>
          <MenuItem value={20}>Dutch (DL)</MenuItem>
          <MenuItem value={30}>French (CA)</MenuItem>
          <MenuItem value={10}>French (FR)</MenuItem>
          <MenuItem value={20}>German (DE)</MenuItem>
          <MenuItem value={30}>Greek (GR)</MenuItem>
          <MenuItem value={20}>Hindi (IN)</MenuItem>
          <MenuItem value={30}>Hungarian (HU)</MenuItem>
          <MenuItem value={20}>Indonesian (ID)</MenuItem>
          <MenuItem value={30}>Italian (IT)</MenuItem>
          <MenuItem value={20}>Japanese (JP)</MenuItem>
          <MenuItem value={30}>Korean (KR)</MenuItem>
          <MenuItem value={20}>Lithunian (LT)</MenuItem>
          <MenuItem value={30}>Malay (MY)</MenuItem>
          <MenuItem value={20}>Norwegian (NO)</MenuItem>
          <MenuItem value={30}>Persian (IR)</MenuItem>
          <MenuItem value={30}>Portugese (BR)</MenuItem>
          <MenuItem value={30}>Portugese (PT)</MenuItem>
          <MenuItem value={30}>Russian (RU)</MenuItem>
          <MenuItem value={30}>Spanish (MX)</MenuItem>
          <MenuItem value={30}>Swahili (KE)</MenuItem>
          <MenuItem value={30}>Tagalog (PH)</MenuItem>
          <MenuItem value={30}>Thai (TH)</MenuItem>
          <MenuItem value={30}>Turkish (TR)</MenuItem>
          <MenuItem value={30}>Ukranian (UA)</MenuItem>
          <MenuItem value={30}>Viatnamese (VN)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
