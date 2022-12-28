import { check_image } from '../../utilities/cach';

describe('Checking the caching function ', () => {
  const true_img = process.cwd() + '/images/santamonica.jpg';
  const width = 1920;
  const height = 1273;
  const f_width = 1000;
  const f_height = 1073;
  const false_img = process.cwd() + '/images/fall.jpg';
  it('Should return true for existing image', async () => {
    const result = await check_image(true_img, width, height);
    expect(result).toBe(true);
  });
  it('Should return false for non-existing imgage', async () => {
    const result = await check_image(false_img, width, height);
    expect(result).toBe(false);
  });
  it('Should return false  the image exist but not in the same dimensions', async () => {
    const result = await check_image(true_img, f_width, height);
    expect(result).not.toBe(true);
  });
});
