import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white p-8 rounded-card card-shadow border border-slate-100 flex flex-col h-full">
            <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                ))}
            </div>
            <p className="text-dark italic leading-relaxed mb-6 flex-1">
                "{review.text}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-dark">{review.name}</h4>
                    <p className="text-[10px] text-light uppercase tracking-widest">Verified Customer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
