import React, { useRef} from 'react'
import {QRCodeSVG} from 'qrcode.react';

interface ContainerQRProps {
  url:string,
  size:number,
  color1:string,
  color2:string
}

const ContainerQR:React.FC <ContainerQRProps> = ({url, size, color1, color2}) => {
  const qrRef=useRef<SVGSVGElement>(null)
  const handleDownload = () => {
    if (qrRef.current) {
      const svg = qrRef.current;
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      canvas.width = size;
      canvas.height = size;

      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngFile;
        downloadLink.download = 'qrcode.png';
        downloadLink.click();
      };

      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  };
  return (
    <section className='containerQR'>
      <div className="qr">
        <QRCodeSVG value={url} size={size} bgColor={color1} fgColor={color2} ref={qrRef} />
      </div>
      <div className="buttons">
        <button onClick={handleDownload}>Download PNG</button>
      </div>
    </section>
  )
}
export default ContainerQR