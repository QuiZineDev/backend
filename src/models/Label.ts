import { supabase } from '../supabaseClient';

import { Label } from '../types/core/Label';
import { NnLabelLabelisable } from '../types/core/NnLabelLabelisable';
import { Question } from '../types/core/Question';

export	{ Label };

export async function findLabelByName(name: string): Promise<Label | null> {
    const { data, error } = await supabase
        .from('label')
        .select('*')
        .ilike('nom', `%${name}%`)
        .single();
    
    if (error) return null;
    return data as Label;
}

export async function labelise(id_label: number, id_labelisable: number): Promise<NnLabelLabelisable | null> {
    const newLabel = {
        id_label,
        id_labelisable
    };

    const { data, error } = await supabase
        .from('nn_label_labelisable')
        .insert(newLabel)
        .select('*')
        .single();

    if (error) return null;
    return data as NnLabelLabelisable;
}

export async function createLabel(name: string): Promise<Label | null> {
    const newLabel = {
        nom: name
    };

    const { data, error } = await supabase
        .from('label')
        .insert(newLabel)
        .select('*')
        .single();

    if (error) return null;
    return data as Label;
}


