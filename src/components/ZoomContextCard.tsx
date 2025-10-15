import { InlineExpand } from './InlineExpand';
import { useLightAudio } from '@/hooks/useLightAudio';
import { Play, Pause, ExternalLink } from 'lucide-react';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  logo?: string;
  excerpt?: string;
  comment?: string;
  link?: string;
  media?: { type?: 'audio'|'video'; src?: string; preview?: string; durationSec?: number };
  tags?: string[];
  open: boolean;
  onToggle: (id: string) => void;
};

export function ZoomContextCard({
  id, title, subtitle, logo, excerpt, comment, link, media, tags,
  open, onToggle,
}: Props) {
  const { currentId, isPlaying, play, stop } = useLightAudio();
  const playingThis = currentId === id && isPlaying;
  const ariaId = `zc-${id}`;

 return (
  <div className="py-4 border-b border-border/60">
    <button
      id={ariaId}
      className="w-full text-left flex items-start gap-3 group cursor-pointer"
      onClick={() => onToggle(id)}
      aria-expanded={open}
      aria-controls={`${ariaId}-panel`}
    >
      {logo ? (
        <img src={logo} alt="" className="w-9 h-9 rounded bg-muted object-contain" />
      ) : null}
      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:underline underline-offset-4">
          {title}
        </h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        {excerpt && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{excerpt}</p>}
      </div>
    </button>

    <InlineExpand open={open} ariaId={ariaId} className="overflow-hidden" >
      <div id={`${ariaId}-panel`} className="space-y-3">
        {comment && <p className="text-sm italic text-muted-foreground/90">“{comment}”</p>}
        {/* … (media, tags, CTA inchangés) … */}
      </div>
    </InlineExpand>
  </div>
);

          {/* Media (audio prioritaire) */}
          {media?.type === 'audio' && media.src && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => (playingThis ? stop() : play(id, media.src!))}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition"
                aria-label={playingThis ? 'Pause audio' : 'Play audio'}
              >
                {playingThis ? <Pause size={16}/> : <Play size={16}/>}
                <span className="text-sm">{playingThis ? 'Pause' : 'Play'}</span>
              </button>
              {typeof media.durationSec === 'number' && (
                <span className="text-xs text-muted-foreground">
                  ~{Math.round(media.durationSec)}s
                </span>
              )}
            </div>
          )}

          {/* Tags */}
          {tags?.length ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-full border text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          ): null}

          {/* CTA */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              Open resource <ExternalLink size={14}/>
            </a>
          )}
     </InlineExpand>
    </div>
  );
}
