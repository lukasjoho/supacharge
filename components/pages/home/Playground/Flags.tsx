'use client';
import ToastDialog from '@/components/shared/ToastDialog';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  computeWeightForVariants,
  useVariants,
} from '../Variants/VariantsContext';
import { Experiment } from '../Variants/config';

function syntaxHighlight(json: any) {
  if (!json) return ''; //no JSON from response

  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match: any) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
}

const Flags = () => {
  const { experiment, activeVariants, setActiveVariants } = useVariants();
  const [flags, setFlags] = useState<Omit<Experiment, 'decision'>[]>();

  useEffect(() => {
    setFlags([
      {
        id: experiment.id,
        name: experiment.name,
        startDate: experiment.startDate,
        endDate: experiment.endDate,
        isEnabled: experiment.isEnabled,
        variants: computeWeightForVariants(activeVariants).map((variant) => ({
          id: variant.id,
          weight: Number((1 / activeVariants.length).toFixed(4)),
        })),
      },
    ]);
  }, [activeVariants, experiment]);

  const fireToast = () => {
    toast.success(
      (t) => (
        <ToastDialog
          id={t.id}
          title="Experiments are exposed via an API 🧑‍💻"
          message="The Supacharge feature flag API lets any client application consume your experiment configuration."
        />
      ),
      {
        duration: 6000,
      }
    );
  };

  return (
    <div className="h-full flex flex-col" onClick={() => fireToast()}>
      <div className="h-7 border-b border-t flex justify-between items-center px-4 bg-muted/50 shrink-0">
        <p className="text-muted-foreground text-2xs">/api/flags</p>
        <RealtimeLabel />
      </div>
      <div className="relative grow">
        <pre
          className="absolute overflow-scroll w-full h-full left-0 top-0 p-4 text-xs"
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(JSON.stringify(flags, undefined, 4)),
          }}
        />
      </div>
    </div>
  );
};

export default Flags;

const RealtimeLabel = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-2xs text-green-500">Realtime</p>
      <div className="h-1 aspect-square rounded-full bg-green-500" />
    </div>
  );
};
