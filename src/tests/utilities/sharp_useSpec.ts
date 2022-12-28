import { sharp_use } from '../../utilities/sharp_use';
const width = 1000;
const height = 800;
const ori_img = process.cwd() + '/images/santamonica.jpg';
const f_img = process.cwd() + '/images/san.jpg';
const thumb_img = process.cwd() + '/thumb/santamonica.jpg';

describe('Testing the sharp functionality', () => {
  it('Should resize the image and return the thumbnail path', async () => {
    const result = await sharp_use(width, height, ori_img, thumb_img);
    expect(result).toEqual(thumb_img);
  });

  it('should handle errors when resizing the image and return "error"', async () => {
    const result = await sharp_use(width, height, f_img, thumb_img);
    expect(result).toEqual('error');
  });
});
