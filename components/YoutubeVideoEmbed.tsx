import { YouTubeEmbed } from "@next/third-parties/google";

interface YoutubeVideoProps {
	videoid: string;
	height?: number;
	width?: number;
	style?:string;
	
}

const YoutubeVideoEmbed = ({ videoid, height = 0, width=0,style }: YoutubeVideoProps) => {
  return <YouTubeEmbed style={style} videoid={videoid} height={height} width={width} params="controls=0" />;
};

export default YoutubeVideoEmbed;


