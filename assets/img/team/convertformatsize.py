from pathlib import Path
from PIL import Image

inputPath = Path("D:/PittHexAi/pitthexai.github.io-main/assets/img/team_old")
outputPath = Path("D:/PittHexAi/pitthexai.github.io-main/assets/img/team")
inputFiles = inputPath.glob("**/*.*")
for f in inputFiles:
    outputFile = outputPath / Path(f.stem + ".jpg")
    im = Image.open(f)
    rgb_im = im.convert('RGB')
    new_image = rgb_im.resize((218, 244))
    new_image.save(outputFile)
