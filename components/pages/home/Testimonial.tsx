import Container from '@/components/layout/Container';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div>
      <Container>
        <div className="space-y-8 md:space-y-12">
          <div className="flex gap-3 md:gap-5 items-center">
            <div className="relative aspect-square w-12 md:w-20 rounded-full overflow-hidden">
              <Image
                alt="Arne Kobelt"
                src="/arne-kobelt.png"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-medium">Arne Kobelt</p>
              <p className="text-base md:text-lg text-muted-foreground">
                Head of Growth
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b py-8 md:py-16 gap-6 md:gap-16">
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Experiments on the fast track.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                Uplift has transformed our process, enabling us to iterate,
                deploy, and learn faster than ever before. With Uplift, we are
                able to seamlessly orchestrate and ship experiments with
                precision and agility. It is our secret weapon for bringing all
                our experimentation efforts under one roof.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
