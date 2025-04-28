import {Alert, Text, TouchableOpacity} from 'react-native';
import {launchCamera, CameraOptions, Asset} from 'react-native-image-picker';

const ImagePickerDemo = () => {
  const handleTakePhoto = async () => {
    console.log('testS');
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true,
      quality: 1,
    };
    await launchCamera(options, response => {
      console.log('testF', response);
      if (response.didCancel) {
        console.log('Cancelled', 'test');
      } else if (response.errorCode) {
        console.log('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        console.log('Assessment already exists', 'test');
      }
    });
  };
  return (
    <>
      <TouchableOpacity onPress={handleTakePhoto}>
        <Text>Зробити фото</Text>
      </TouchableOpacity>
    </>
  );
};

export default ImagePickerDemo;
