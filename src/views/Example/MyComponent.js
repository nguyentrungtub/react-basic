import React from 'react';

class MyComponent extends React.Component {
    // kế thừa (extends)
    render() {
        return (
            <div> Hello my component </div>
        )
    }
}

// muốn sử dụng MyComponent ở file khác
// nếu nhiều class sẽ là {} chứ k phải default
// export {} MyComponent;
export default MyComponent;