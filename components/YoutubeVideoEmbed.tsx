import { YouTubeEmbed } from "@next/third-parties/google";

interface YoutubeVideoProps {
	videoid: string;
	height?: number;
	width?: number;
}

const YoutubeVideoEmbed = ({ videoid, height = 0, width=0 }: YoutubeVideoProps) => {
  return <YouTubeEmbed videoid={videoid} height={height} width={width} params="controls=0" />;
};

export default YoutubeVideoEmbed;


