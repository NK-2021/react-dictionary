import './Header.css';
import {createMuiTheme, TextField, ThemeProvider, MenuItem} from '@material-ui/core';
import categories from '../../data/category';
import {debounce} from 'lodash';

const Header = ({category, setCategory, word, setWord}) =>{
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });

    const handleChange = (language) =>{
      setCategory(language);
      setWord('');
    }

    const handleText = debounce((text)=>{
      setWord(text);
    },700);

    return (
        <div className="header">
            <span className="title">Dictionary</span>
            {/* {word? `Seach the word ${word}` : "Search Word"} */}
            <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField className="search" id="standard-basic" label="Search a Word" onChange={(e)=>handleText(e.target.value)}/>
                <TextField
                className="select"
                id="standard-select-currency"
                select
                label="Language"
                value={category}
                onChange={(e)=>{handleChange(e.target.value)}}
              >
              {categories.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;