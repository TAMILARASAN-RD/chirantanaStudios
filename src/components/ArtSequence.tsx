import VideoBackground from './VideoBackground';

export default function ArtSequence() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
        <VideoBackground />
    </div>
  );
}
