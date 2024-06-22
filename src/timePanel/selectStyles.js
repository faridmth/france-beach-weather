export const customStyles = {
    dropdownIndicator: (provided) => ({
        ...provided,
        padding:'0px'
      }),
      container: (provided,state) => ({
        ...provided,
        padding:'0px',
        textAlign:'center',
        color:'white'

      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display:'none',
      }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: 'none', 
      backgroundColor: '#105492',
      borderColor: state.isFocused ? '#105492' : '#105492', 
      borderColor:'#105492',
      padding: '0px',
      minHeight :'35px',
      color:'white',
      borderRadius:'0px',
      cursor:'pointer',
      ':hover': {
      borderColor: '#105492',       
    },

    }),
    singleValue: (provided, state) => ({
      ...provided,
      color:'white',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color:'white',
    }),
    menuList: (provided, state) => ({
      ...provided,
      backgroundColor: '#105492',
    }),
    option: (provided, state) => ({
      cursor:'pointer',
      fontSize:'16px',
      padding:'3px',
    ':hover': {
      backgroundColor: '#379fec',
    },      
    }),

    
  };
  