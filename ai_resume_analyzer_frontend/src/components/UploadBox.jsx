export default function UploadBox({ onFileSelect }) {
  return (
    <div className="upload-box glass">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onFileSelect(e.target.files[0])}
      />
    </div>
  );
}
