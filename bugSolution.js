```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some_api')
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <View>
      {/* Conditional Rendering */}
      {data && <Text>{data.someProperty}</Text>}
      {/* Or using Optional Chaining */}
      {/*<Text>{data?.someProperty}</Text> */}
      {/* Or using a default value */}
       {/* <Text>{data ? data.someProperty : 'Loading...'}</Text> */}
    </View>
  );
};

export default MyComponent;
```