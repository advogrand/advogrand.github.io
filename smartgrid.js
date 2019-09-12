var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1230px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        xl: {
            width: '1200px', /* -> @media (max-width: 1100px) */
        },
        lg: {
            width: '992px'
        },
        md: {
            width: '790px'
        },
        sm: {
            width: '576px',
            
        },
        xs: {
            width: '500px',
            fields: '15px'
        }
    }
    

};

smartgrid('./src/precss', settings);