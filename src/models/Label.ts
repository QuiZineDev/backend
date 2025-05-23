import { supabase } from '../supabaseClient';

import { Label } from '../types/core/Label';
import { NnLabelLabelisable } from '../types/core/NnLabelLabelisable';
import { Question } from '../types/core/Question';

export	{ Label };

export async function findLabelByName(name: string): Promise<Label[] | null> {
    const { data, error } = await supabase
        .from('label')
        .select('*')
        .ilike('nom', `%${name}%`)
    
    if (error) return null;
    return data as Label[];
}
export async function findLabelByNameExact(name: string): Promise<Label | null> {
    const { data, error } = await supabase
        .from('label')
        .select('*')
        .eq('nom', name)
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

export async function findLabelsByLabelisableId(id_labelisable: number): Promise<Label[] | null> {
    const { data, error } = await supabase
        .from('nn_label_labelisable')
        .select('label(*)')
        .eq('id_labelisable', id_labelisable);

    if (error || !data) return null;
    // Extract only the label objects
    return data.map((row: any) => row.label) as Label[];
}
